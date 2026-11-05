# Search My Vote — Grievance & Voter Support Portal

A democratic civic support portal and casework management system built to assist Indian citizens with electoral roll verification, voter registration issues, name deletions, and advocacy.

## ✨ Features

- **Public Citizen Portal (`/`):**
  - **Botanical Design Identity:** Warm cream paper, deep forest green typography (EB Garamond & Instrument Sans), and responsive layout.
  - **3D Flip Complaint & Tracking Card:** Real-time form with nationwide 28 States & 8 UTs cascading constituency hierarchies.
  - **Irrevocable Ticket Generator:** Generates unique tracking IDs (e.g., `2026NAME01`).
  - **Downloadable Case Receipt:** Print or save a formatted civic receipt with status stamps.
  - **Live Case Tracking:** Citizens can track casework progress, status changes, and official caseworker remarks in real time.


## 🚀 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Frontend:** Vanilla HTML5, Modern CSS3 (CSS Variables, Flexbox/Grid, 3D CSS Card Flip), Vanilla JavaScript
- **Styling:** Botanical Design System (EB Garamond, Instrument Sans)

## 🛠️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajsh7/Search-My-Vote.git
   cd Search-My-Vote
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` and provide your MongoDB connection string:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the application:**
   ```bash
   pnpm start
   # or
   node server.js
   ```

5. **Access the application:**
   - Public Grievance Portal: [http://localhost:3000](http://localhost:3000)
   - Casework CRM Dashboard: [http://localhost:3000/login/crm](http://localhost:3000/login/crm)
