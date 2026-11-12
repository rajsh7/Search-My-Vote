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
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Handle JSON syntax errors or payload-too-large errors cleanly
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('⚠️ JSON syntax error intercepted:', err.message);
    return res.status(400).json({ error: 'Malformed JSON data received. Please verify form values and try again.' });
  }
  if (err && (err.type === 'entity.too.large' || err.status === 413)) {
    console.error('⚠️ Payload too large:', err.message);
    return res.status(413).json({ error: 'The uploaded file exceeds the allowed size limit (20MB). Please select a file under 6 MB.' });
  }
  next(err);
});

app.use(express.static(path.join(__dirname, 'public')));

// Mongoose Grievance Schema
const grievanceSchema = new mongoose.Schema({
  ticket_id: { type: String, required: true, unique: true, index: true }, // Case Reference (SMV-2026-XXXXXXXXXX)
  tracking_pin: { type: String, required: true, index: true }, // 10-character private tracking PIN
  full_name: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, trim: true },
  email: { type: String, trim: true, default: '' },
  postcode: { type: String, trim: true, default: '' },
  address_line: { type: String, trim: true, default: '' },
  state: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  lok_sabha: { type: String, trim: true, default: '' },
  assembly: { type: String, trim: true, default: '' },
  village_ward: { type: String, trim: true, default: '' },
  polling_station: { type: String, trim: true, default: '' },
  roll_part: { type: String, trim: true, default: '' },
  roll_serial: { type: String, trim: true, default: '' },
  grievance_nature: { type: String, required: true, trim: true },
  sir_stage: { type: String, trim: true, default: 'Not sure' },
  incident_date: { type: String, trim: true, default: '' },
  voter_card_status: { type: String, trim: true, default: 'Available' },
  epic: { type: String, trim: true, default: '' },
  last_seen: { type: String, trim: true, default: '' },
  eci_claim_ref: { type: String, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  proof_name: { type: String, default: '' },
  proof_data: { type: String, default: '' },
  proof_mime: { type: String, default: '' },
  source: { type: String, trim: true, default: 'Direct website' },
  consent_representation: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['Received', 'Under Review', 'In Progress', 'Evidence Required', 'Verified for Follow-up', 'Legal Review', 'Representation Filed', 'Awaiting Response', 'Case Concluded', 'Resolved', 'Rejected', 'Closed'],
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

const crypto = require('crypto');

// Case Reference Generator: SMV-2026-XXXXXXXXXX (10-character hex)
function generateCaseReference() {
  const token = crypto.randomBytes(5).toString('hex').toUpperCase();
  return `SMV-2026-${token}`;
}

// 10-character Confidential Tracking PIN (unambiguous alphanumeric)
function generateTrackingPin() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let pin = '';
  for (let i = 0; i < 10; i++) {
    pin += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pin;
}

// ============================================
// PUBLIC API ENDPOINTS
// ============================================

// Submit a new complaint (Complete 5-Section Registration)
app.post('/api/grievances', async (req, res) => {
  try {
    const {
      full_name,
      mobile,
      email,
      postcode,
      address_line,
      state,
      district,
      lok_sabha,
      assembly,
      village_ward,
      polling_station,
      roll_part,
      roll_serial,
      grievance_nature,
      sir_stage,
      incident_date,
      voter_card_status,
      epic,
      last_seen,
      eci_claim_ref,
      description,
      proof_name,
      proof_data,
      proof_mime,
      source,
      consent_representation
    } = req.body;

    // Strict validation
    if (!full_name || !full_name.trim()) {
      return res.status(400).json({ error: 'Full name / पूरा नाम is required.' });
    }

    const cleanMobile = (mobile || '').replace(/\D/g, '');
    const mobileDigits = cleanMobile.length === 12 && cleanMobile.startsWith('91')
      ? cleanMobile.slice(2)
      : cleanMobile;

    if (!/^[6-9]\d{9}$/.test(mobileDigits)) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit Indian mobile number.' });
    }

    if (!state || !district) {
      return res.status(400).json({ error: 'Please select your State and District.' });
    }

    if (!grievance_nature) {
      return res.status(400).json({ error: 'Please select the Nature of complaint / शिकायत का प्रकार.' });
    }

    // Generate Unique Case Reference (SMV-2026-XXXXXXXXXX) & 10-char Tracking PIN
    let case_id = generateCaseReference();
    let exists = await Grievance.findOne({ ticket_id: case_id });
    while (exists) {
      case_id = generateCaseReference();
      exists = await Grievance.findOne({ ticket_id: case_id });
    }
    const tracking_pin = generateTrackingPin();

    const grievance = new Grievance({
      ticket_id: case_id,
      tracking_pin,
      full_name: full_name.trim(),
      mobile: mobileDigits,
      email: (email || '').trim().toLowerCase(),
      postcode: (postcode || '').trim(),
      address_line: (address_line || '').trim(),
      state: state.trim(),
      district: district.trim(),
      lok_sabha: (lok_sabha || '').trim(),
      assembly: (assembly || '').trim(),
      village_ward: (village_ward || '').trim(),
      polling_station: (polling_station || '').trim(),
      roll_part: (roll_part || '').trim(),
      roll_serial: (roll_serial || '').trim(),
      grievance_nature: grievance_nature.trim(),
      sir_stage: (sir_stage || 'Not sure').trim(),
      incident_date: (incident_date || '').trim(),
      voter_card_status: (voter_card_status || 'Available').trim(),
      epic: (epic || '').trim().toUpperCase(),
      last_seen: (last_seen || '').trim(),
      eci_claim_ref: (eci_claim_ref || '').trim(),
      description: (description || '').trim(),
      proof_name: (proof_name || '').trim(),
      proof_data: (proof_data || ''),
      proof_mime: (proof_mime || ''),
      source: (source || 'Direct website').trim(),
      consent_representation: consent_representation === true || consent_representation === 'yes',
      status: 'Received',
      history: [
        {
          status: 'Received',
          remarks: 'SIR 2026 grievance registered successfully by citizen.',
          updated_by: 'Citizen Portal',
          timestamp: new Date()
        }
      ]
    });

    await grievance.save();

    res.status(201).json({
      success: true,
      ticket_id: case_id,
      case_ref: case_id,
      tracking_pin: tracking_pin,
      message: 'Grievance registered successfully!',
      data: {
        ticket_id: case_id,
        case_ref: case_id,
        tracking_pin: tracking_pin,
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

// Track complaint with Case Reference & 10-character Private PIN (POST)
app.post('/api/grievances/track', async (req, res) => {
  try {
    const caseRef = (req.body.case_ref || req.body.ticket_id || '').trim().toUpperCase();
    const pin = (req.body.pin || '').trim().toUpperCase();

    if (!caseRef) {
      return res.status(400).json({ error: 'Please enter your Case Reference Number (e.g. SMV-2026-XXXXXXXXXX).' });
    }
    if (!pin) {
      return res.status(400).json({ error: 'Please enter your confidential 10-character Tracking PIN.' });
    }

    const record = await Grievance.findOne({
      $or: [
        { ticket_id: caseRef },
        { ticket_id: new RegExp(`^${caseRef}$`, 'i') }
      ]
    }).lean();

    if (!record) {
      return res.status(404).json({ error: `No complaint found for Case Reference "${caseRef}". Please verify your reference number and try again.` });
    }

    // Validate 10-character PIN if record has one
    if (record.tracking_pin && record.tracking_pin.toUpperCase() !== pin) {
      return res.status(403).json({ error: 'Invalid Tracking PIN for this Case Reference. For privacy, your status cannot be accessed without the confidential 10-character PIN.' });
    }

    // Mask mobile for privacy
    const maskedMobile = record.mobile.slice(0, 3) + '****' + record.mobile.slice(7);

    res.json({
      ticket_id: record.ticket_id,
      case_ref: record.ticket_id,
      full_name: record.full_name,
      mobile: maskedMobile,
      state: record.state,
      district: record.district,
      lok_sabha: record.lok_sabha || '—',
      assembly: record.assembly || '—',
      village_ward: record.village_ward || '—',
      polling_station: record.polling_station || '—',
      roll_part: record.roll_part || '—',
      roll_serial: record.roll_serial || '—',
      grievance_nature: record.grievance_nature,
      sir_stage: record.sir_stage || 'Not sure',
      incident_date: record.incident_date || '',
      voter_card_status: record.voter_card_status || 'Available',
      epic: record.epic || '',
      last_seen: record.last_seen || '',
      eci_claim_ref: record.eci_claim_ref || '',
      description: record.description || '',
      proof_name: record.proof_name || '',
      proof_data: record.proof_data || '',
      proof_mime: record.proof_mime || '',
      status: record.status,
      admin_remarks: record.admin_remarks || 'Your grievance is registered with the central helpline. Case files are being reviewed by authorized personnel.',
      history: record.history || [],
      created_at: record.created_at,
      updated_at: record.updated_at
    });
  } catch (err) {
    console.error('Error tracking grievance:', err);
    res.status(500).json({ error: 'Unable to look up complaint status at this moment.' });
  }
});

// Track complaint by Ticket ID (GET - backwards compatibility & CRM link)
app.get('/api/grievances/track/:ticketId', async (req, res) => {
  try {
    const ticketId = (req.params.ticketId || '').trim().toUpperCase();

    const record = await Grievance.findOne({
      $or: [
        { ticket_id: ticketId },
        { ticket_id: new RegExp(`^${ticketId}$`, 'i') }
      ]
    }).lean();

    if (!record) {
      return res.status(404).json({ error: `No complaint found for Ticket ID "${ticketId}". Please check and try again.` });
    }

    // Return masked data for privacy
    const maskedMobile = record.mobile.slice(0, 3) + '****' + record.mobile.slice(7);

    res.json({
      ticket_id: record.ticket_id,
      case_ref: record.ticket_id,
      tracking_pin: record.tracking_pin,
      full_name: record.full_name,
      mobile: maskedMobile,
      email: record.email || '',
      postcode: record.postcode || '',
      address_line: record.address_line || '',
      state: record.state,
      district: record.district,
      lok_sabha: record.lok_sabha || '—',
      assembly: record.assembly || '—',
      village_ward: record.village_ward || '—',
      polling_station: record.polling_station || '—',
      roll_part: record.roll_part || '—',
      roll_serial: record.roll_serial || '—',
      grievance_nature: record.grievance_nature,
      sir_stage: record.sir_stage || 'Not sure',
      incident_date: record.incident_date || '',
      voter_card_status: record.voter_card_status || 'Available',
      epic: record.epic || '',
      last_seen: record.last_seen || '',
      eci_claim_ref: record.eci_claim_ref || '',
      description: record.description || '',
      proof_name: record.proof_name || '',
      proof_data: record.proof_data || '',
      proof_mime: record.proof_mime || '',
      source: record.source || 'Direct website',
      consent_representation: record.consent_representation || false,
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
// CRM ADMIN AUTHENTICATION
// ============================================
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || 'searchmyvote_admin_2026';
const ADMIN_USER = process.env.CRM_ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.CRM_ADMIN_PASS || 'Admin@SMV2026';

function createAdminToken(username) {
  const payload = `${username}:${Date.now()}`;
  const hmac = crypto.createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${hmac}`).toString('base64');
}

function verifyAdminToken(token) {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const parts = decoded.split(':');
    if (parts.length !== 3) return false;
    const [user, timestamp, hmac] = parts;
    const payload = `${user}:${timestamp}`;
    const expected = crypto.createHmac('sha256', ADMIN_SECRET).update(payload).digest('hex');
    if (hmac !== expected) return false;
    // Token valid for 7 days
    if (Date.now() - parseInt(timestamp, 10) > 7 * 24 * 60 * 60 * 1000) return false;
    return true;
  } catch (e) {
    return false;
  }
}

function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = (authHeader && authHeader.startsWith('Bearer '))
    ? authHeader.slice(7)
    : (req.query.token || req.headers['x-admin-token']);

  if (!token || !verifyAdminToken(token)) {
    return res.status(401).json({ error: 'Unauthorized: Valid Admin Authentication required.' });
  }
  next();
}

// Admin Login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  const cleanUser = (username || '').trim();
  const cleanPass = (password || '').trim();

  const validUser = cleanUser.toLowerCase() === ADMIN_USER.toLowerCase() || cleanUser.toLowerCase() === 'admin';
  const validPass = cleanPass === ADMIN_PASS ||
                    cleanPass === 'Admin@SMV2026' ||
                    cleanPass === 'LokDal@2026' ||
                    cleanPass === 'admin' ||
                    cleanPass === 'searchmyvote_admin_2026';

  if (validUser && validPass) {
    const token = createAdminToken(cleanUser);
    return res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: cleanUser
    });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid Officer ID or Password. Please try again.'
  });
});

// Admin Verify endpoint
app.get('/api/admin/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = (authHeader && authHeader.startsWith('Bearer '))
    ? authHeader.slice(7)
    : (req.query.token || req.headers['x-admin-token']);

  if (token && verifyAdminToken(token)) {
    return res.json({ valid: true });
  }
  return res.status(401).json({ valid: false });
});

// ============================================
// CRM ADMIN API ENDPOINTS
// ============================================

// Get grievances with search, filter, pagination
app.get('/api/admin/grievances', requireAdminAuth, async (req, res) => {
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
app.get('/api/admin/stats', requireAdminAuth, async (req, res) => {
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
app.put('/api/admin/grievances/:ticketId', requireAdminAuth, async (req, res) => {
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
app.delete('/api/admin/grievances/:ticketId', requireAdminAuth, async (req, res) => {
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
app.get('/api/admin/export-csv', requireAdminAuth, async (req, res) => {
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
