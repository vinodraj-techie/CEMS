# 🎓 College Event Management System (CEMS)

A **MERN stack web application** for managing college events efficiently.  
It allows **Admins**, **Organizers**, and **Users** to collaborate on event creation, approvals, and participation.

---

## Features

###  Admin
- Add/manage **college clubs**.
- Add and approve **organizers**.
- Oversee all events.

###  Organizer
- Add and manage events for their respective clubs.
- Provide details: event name, description, location, date, rewards.
- Update or cancel events.

### User
- Browse and register for college events.
- View event details, rewards, and schedules.
- Stay updated with upcoming activities.

---

## Tech Stack

**Frontend:**  
- React.js  
- Fetch API (for backend communication)  
- CSS / Custom Styles / Tailwind  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  

**Other Tools:**  
- JWT Authentication  
- bcrypt.js for password hashing  
- Git/GitHub for version control  

---

## 📂 Project Structure

###  Frontend (`client/`)
```
client/
├── common/              # Shared utilities/components
├── components/          # Reusable UI components
├── context/             # React Context (auth, state management)
├── pages/               # Page-level components (Home, Login, Dashboard, etc.)
├── routes/              # React Router components (ProtectedRoute, etc.)
├── services/            # API calls using fetch
├── styles/              # CSS/Tailwind styles
├── App.js               # Main React component
├── Config.js            # Frontend config (API base URL, etc.)
├── index.js             # React DOM entry point
├── App.test.js
├── reportWebVitals.js
└── setupTests.js
```

###  Backend (`backend/`)
```
backend/
├── config/              # DB and environment config
├── controllers/         # Business logic for routes
├── middlewares/         # Auth, error handling, validation
├── models/              # Mongoose schemas (User, Club, Event, etc.)
├── routes/              # API routes (auth, events, clubs, etc.)
├── utils/               # Helper functions (validators, mailer, etc.)
├── server.js            # Express app entry point
├── .env                 # Environment variables
├── .gitignore           # Ignored files
├── package.json         # Backend dependencies
└── package-lock.json
```

---

## Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/vinodraj-techie/CEMS.git
   cd CEMS
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Setup environment variables:  
   Create a `.env` file inside `backend/`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. Run the app:
   - Start backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Start frontend:
     ```bash
     cd client
     npm start
     ```



---

##  Contributing

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/YourFeature`)  
3. Commit changes (`git commit -m 'Add new feature'`)  
4. Push branch (`git push origin feature/YourFeature`)  
5. Create a Pull Request  

---

## License
This project is licensed under the MIT License.
