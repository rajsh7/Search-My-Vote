require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dns = require('dns');

// On Windows, set public DNS to resolve MongoDB Atlas SRV records properly
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  console.warn('DNS server override note:', e.message);
}

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://weddevraj_db_user:ugSIsJgATGsMtLW8@cluster0.keb8a7d.mongodb.net/searchmyvote?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose Grievance Schema
const grievanceSchema = new mongoose.Schema({
  ticket_id: { type: String, required: true, unique: true, index: true },
  full_name: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, trim: true },
  email: { type: String, trim: true, default: '' },
  state: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  lok_sabha: { type: String, required: true, trim: true },
  assembly: { type: String, required: true, trim: true },
  grievance_nature: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: '' },
  status: {
    type: String,
    enum: ['Received', 'Under Review', 'In Progress', 'Evidence Required', 'Verified for Follow-up', 'Resolved', 'Rejected', 'Closed'],
    default: 'Received'
  },
  admin_remarks: { type: String, default: '' },
  assigned_to: { type: String, default: '' },
  history: [
    {
      status: { type: String },
      remarks: { type: String },
      updated_by: { type: String, default: 'Staff' },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

// Ticket ID Generator: 2026 + 3 letters of name + 2 digit sequence (e.g., 2026RAJ01)
async function generateTicketId(fullName) {
  const letters = fullName.replace(/[^a-zA-Z]/g, '').toUpperCase();
  const nameCode = (letters.slice(0, 3) || 'VOT').padEnd(3, 'X');
  const prefix = `2026${nameCode}`;

  // Find all existing tickets with this prefix
  const regex = new RegExp(`^${prefix}(\\d+)$`);
  const existing = await Grievance.find({ ticket_id: regex }).select('ticket_id').lean();

  let maxSeq = 0;
  existing.forEach(item => {
    const numPart = item.ticket_id.slice(prefix.length);
    const seq = parseInt(numPart, 10);
    if (!isNaN(seq) && seq > maxSeq) {
      maxSeq = seq;
    }
  });

  const nextSeq = (maxSeq + 1).toString().padStart(2, '0');
  return `${prefix}${nextSeq}`;
}

// ============================================
// PUBLIC API ENDPOINTS
// ============================================

// Submit a new complaint
app.post('/api/grievances', async (req, res) => {
  try {
    const {
      full_name,
      mobile,
      email,
      state,
      district,
      lok_sabha,
      assembly,
      grievance_nature,
      description
    } = req.body;

    // Strict validation
    if (!full_name || !full_name.trim()) {
      return res.status(400).json({ error: 'Full name is required.' });
    }

    const cleanMobile = (mobile || '').replace(/\D/g, '');
    const mobileDigits = cleanMobile.length === 12 && cleanMobile.startsWith('91')
      ? cleanMobile.slice(2)
      : cleanMobile;

    if (!/^[6-9]\d{9}$/.test(mobileDigits)) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit Indian mobile number.' });
    }

    if (!state || !district || !lok_sabha || !assembly) {
      return res.status(400).json({ error: 'Please complete the location procedure: State -> District -> Lok Sabha -> Assembly.' });
    }

    if (!grievance_nature) {
      return res.status(400).json({ error: 'Please select the nature of your grievance.' });
    }

    // Generate Ticket ID (e.g. 2026RAJ01)
    const ticket_id = await generateTicketId(full_name);

    const grievance = new Grievance({
      ticket_id,
      full_name: full_name.trim(),
      mobile: mobileDigits,
      email: (email || '').trim().toLowerCase(),
      state: state.trim(),
      district: district.trim(),
      lok_sabha: lok_sabha.trim(),
      assembly: assembly.trim(),
      grievance_nature: grievance_nature.trim(),
      description: (description || '').trim(),
      status: 'Received',
      history: [
        {
          status: 'Received',
          remarks: 'Complaint registered successfully by citizen.',
          updated_by: 'Citizen Portal',
          timestamp: new Date()
        }
      ]
    });

    await grievance.save();

    res.status(201).json({
      success: true,
      ticket_id,
      message: 'Grievance registered successfully!',
      data: {
        ticket_id,
        full_name: grievance.full_name,
        state: grievance.state,
        district: grievance.district,
        created_at: grievance.created_at
      }
    });
  } catch (err) {
    console.error('Error submitting grievance:', err);
    res.status(500).json({ error: 'Server error registering grievance. Please try again.' });
  }
});

// Track complaint by Ticket ID
app.get('/api/grievances/track/:ticketId', async (req, res) => {
  try {
    const ticketId = (req.params.ticketId || '').trim().toUpperCase();

    const record = await Grievance.findOne({ ticket_id: ticketId }).lean();

    if (!record) {
      return res.status(404).json({ error: `No complaint found for Ticket ID "${ticketId}". Please check and try again.` });
    }

    // Return masked data for privacy
    const maskedMobile = record.mobile.slice(0, 3) + '****' + record.mobile.slice(7);

    res.json({
      ticket_id: record.ticket_id,
      full_name: record.full_name,
      mobile: maskedMobile,
      state: record.state,
      district: record.district,
      lok_sabha: record.lok_sabha,
      assembly: record.assembly,
      grievance_nature: record.grievance_nature,
      status: record.status,
      admin_remarks: record.admin_remarks || 'Your complaint is being processed by the authorized grievance team.',
      history: record.history || [],
      created_at: record.created_at,
      updated_at: record.updated_at
    });
  } catch (err) {
    console.error('Error tracking grievance:', err);
    res.status(500).json({ error: 'Unable to look up complaint status at this moment.' });
  }
});

// ============================================
// CRM ADMIN API ENDPOINTS
// ============================================

// Get grievances with search, filter, pagination
app.get('/api/admin/grievances', async (req, res) => {
  try {
    const { status, state, search, page = 1, limit = 20 } = req.query;
    const filter = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (state && state !== 'all') {
      filter.state = state;
    }

    if (search && search.trim()) {
      const q = search.trim();
      filter.$or = [
        { ticket_id: new RegExp(q, 'i') },
        { full_name: new RegExp(q, 'i') },
        { mobile: new RegExp(q, 'i') },
        { district: new RegExp(q, 'i') },
        { lok_sabha: new RegExp(q, 'i') },
        { assembly: new RegExp(q, 'i') }
      ];
    }

    const pageNum = Math.max(1, parseInt(page, 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(limit, 10)));
    const skip = (pageNum - 1) * pageSize;

    const [total, grievances] = await Promise.all([
      Grievance.countDocuments(filter),
      Grievance.find(filter)
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(pageSize)
        .lean()
    ]);

    res.json({
      grievances,
      total,
      page: pageNum,
      limit: pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  } catch (err) {
    console.error('CRM error fetching grievances:', err);
    res.status(500).json({ error: 'Failed to retrieve grievances.' });
  }
});

// Get CRM statistics & analytics
app.get('/api/admin/stats', async (req, res) => {
  try {
    const [
      total,
      received,
      underReview,
      inProgress,
      resolved,
      rejected,
      topStates,
      topIssues,
      dailyIntake,
      priorityCases
    ] = await Promise.all([
      Grievance.countDocuments(),
      Grievance.countDocuments({ status: 'Received' }),
      Grievance.countDocuments({ status: 'Under Review' }),
      Grievance.countDocuments({ status: { $in: ['In Progress', 'Evidence Required', 'Verified for Follow-up'] } }),
      Grievance.countDocuments({ status: { $in: ['Resolved', 'Closed'] } }),
      Grievance.countDocuments({ status: 'Rejected' }),
      Grievance.aggregate([
        { $group: { _id: '$state', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 7 }
      ]),
      Grievance.aggregate([
        { $group: { _id: '$grievance_nature', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 7 }
      ]),
      Grievance.aggregate([
        {
          $match: {
            created_at: { $gte: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000) }
          }
        },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ]),
      Grievance.find({
        status: { $in: ['Received', 'Under Review', 'In Progress'] }
      })
      .sort({ created_at: -1 })
      .limit(4)
      .select('ticket_id full_name grievance_nature district state status created_at')
      .lean()
    ]);

    res.json({
      total,
      received,
      under_review: underReview,
      in_progress: inProgress,
      resolved,
      rejected,
      top_states: topStates.map(s => ({ state: s._id || 'Unknown', count: s.count })),
      top_issues: topIssues.map(i => ({ issue: i._id || 'General', count: i.count })),
      daily_intake: dailyIntake.map(d => ({ date: d._id, count: d.count })),
      priority_cases: priorityCases
    });
  } catch (err) {
    console.error('CRM stats error:', err);
    res.status(500).json({ error: 'Failed to compute dashboard metrics.' });
  }
});

// Update grievance status and add remarks
app.put('/api/admin/grievances/:ticketId', async (req, res) => {
  try {
    const ticketId = req.params.ticketId.toUpperCase();
    const { status, admin_remarks, assigned_to } = req.body;

    const grievance = await Grievance.findOne({ ticket_id: ticketId });
    if (!grievance) {
      return res.status(404).json({ error: 'Grievance not found.' });
    }

    const previousStatus = grievance.status;
    if (status) grievance.status = status;
    if (admin_remarks !== undefined) grievance.admin_remarks = admin_remarks;
    if (assigned_to !== undefined) grievance.assigned_to = assigned_to;
    grievance.updated_at = new Date();

    // Log history
    grievance.history.push({
      status: status || previousStatus,
      remarks: admin_remarks || `Status updated from ${previousStatus} to ${status || previousStatus}`,
      updated_by: assigned_to || 'Staff Administrator',
      timestamp: new Date()
    });

    await grievance.save();

    res.json({ success: true, message: 'Grievance updated successfully.', grievance });
  } catch (err) {
    console.error('CRM update error:', err);
    res.status(500).json({ error: 'Failed to update grievance.' });
  }
});

// Delete grievance
app.delete('/api/admin/grievances/:ticketId', async (req, res) => {
  try {
    const result = await Grievance.findOneAndDelete({ ticket_id: req.params.ticketId.toUpperCase() });
    if (!result) {
      return res.status(404).json({ error: 'Grievance not found.' });
    }
    res.json({ success: true, message: 'Grievance removed.' });
  } catch (err) {
    console.error('CRM delete error:', err);
    res.status(500).json({ error: 'Failed to delete grievance.' });
  }
});

// Export grievances to CSV (as in reference site)
app.get('/api/admin/export-csv', async (req, res) => {
  try {
    const cases = await Grievance.find().sort({ created_at: -1 }).lean();

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="searchmyvote-complaints.csv"');

    // CSV Header
    res.write('Ticket ID,Full Name,Mobile,Email,State,District,Lok Sabha,Assembly,Grievance Nature,Status,Admin Remarks,Created At\r\n');

    cases.forEach(c => {
      const row = [
        c.ticket_id,
        `"${(c.full_name || '').replace(/"/g, '""')}"`,
        c.mobile,
        c.email || '',
        `"${(c.state || '').replace(/"/g, '""')}"`,
        `"${(c.district || '').replace(/"/g, '""')}"`,
        `"${(c.lok_sabha || '').replace(/"/g, '""')}"`,
        `"${(c.assembly || '').replace(/"/g, '""')}"`,
        `"${(c.grievance_nature || '').replace(/"/g, '""')}"`,
        c.status,
        `"${(c.admin_remarks || '').replace(/"/g, '""')}"`,
        c.created_at ? new Date(c.created_at).toISOString() : ''
      ].join(',');
      res.write(row + '\r\n');
    });

    res.end();
  } catch (err) {
    console.error('Export CSV error:', err);
    res.status(500).send('Error generating CSV export.');
  }
});

// CRM panel route
app.get('/login/crm', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Redirect /admin to /login/crm
app.get('/admin', (req, res) => {
  res.redirect('/login/crm');
});

// Fallback to main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connect to MongoDB Atlas and start server
async function startServer() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000
    });
    console.log('✅ Connected to MongoDB Atlas successfully!');

    app.listen(PORT, () => {
      console.log(`🚀 Search My Vote server running at http://localhost:${PORT}`);
      console.log(`📋 CRM Admin Dashboard: http://localhost:${PORT}/admin`);
    });
  } catch (err) {
    console.error('❌ MongoDB Atlas connection error:', err.message);
    process.exit(1);
  }
}

startServer();
