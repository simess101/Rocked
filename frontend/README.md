# Rocked - Gym Management System

Rocked is a full-stack gym management system with rock climbing route tracking and user registration. This README provides detailed instructions for setting up and running the project locally.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
  - [4. Database Setup](#4-database-setup)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Notes](#notes)

## Features

- User registration (with username, email, password) and login
- Role-based access (admin, routesetter, member, guest)
- Manage gym boulders and climbing routes
- Submit feedback and track route completions
- Fully responsive rock climbing–themed frontend

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (version 12+ recommended)
- (Optional) A SQL client like pgAdmin or DBeaver for managing the database

## Project Structure

Rocked/
├── backend/
│   ├── node_modules/
│   ├── routes/
│   │   └── auth.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   │       └── rock-climbing-bg.jpg
│   │   ├── components/
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── NavigationBar.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── BoulderDetail.js
│   │   │   ├── BoulderList.js
│   │   │   ├── Dashboard.js
│   │   │   ├── LoginPage.js
│   │   │   ├── NotFoundPage.js
│   │   │   ├── RegisterPage.js
│   │   │   └── RouteDetail.js
│   │   ├── routes/
│   │   │   ├── AppRoutes.js
│   │   │   └── PrivateRoute.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── boulderService.js
│   │   │   └── routeService.js
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
└── README.md

## Setup Instructions 

### 1. Clone the Repository  
Clone the repository to your local machine: 
`git clone https://github.com/yourusername/rocked.git cd rocked`

### 2. Backend Setup

1. **Navigate to the backend folder:**
    
    `cd backend`
    
2. **Install dependencies:**
    
    `npm install`
    
3. **Set up Environment Variables:**
    
    Create a `.env` file in the `backend` folder with the following content (adjust values as needed):

    `PORT=5001 DB_USER=your_db_username DB_PASSWORD=your_db_password DB_NAME=gym_management DB_HOST=localhost DB_PORT=5432`
    
4. **Database Setup:**
    
    - **Create the Database:** Open your terminal and access `psql`:
        
        `psql -U your_db_username`
        
5. **Start the Backend Server:**
    
    `node server.js`
    
    You should see a message indicating that the server is running on port 5001.
    

### 3. Frontend Setup

1. **Navigate to the frontend folder:**

    `cd ../frontend`
    
2. **Install dependencies:**

    `npm install`
    
3. **Set up Environment Variables:**
    
    Create a `.env` file in the `frontend` folder (if using environment variables) with content similar to:
    
    `REACT_APP_API_BASE_URL=http://localhost:5001/api`
    
4. **Start the Frontend Development Server:**

    
    `npm start`
    
    The frontend should open in your default browser (usually on [http://localhost:3000](http://localhost:3000)).
    

### 4. Database Verification

To check who has registered, you can connect to the PostgreSQL database using `psql` or a GUI tool:

- **Using psql:**
    
    `psql -d gym_management -U your_db_username`
    
    Then run:
    
    `SELECT * FROM users;`
    
- **Using pgAdmin/DBeaver:**  
    Connect to the `gym_management` database and browse the `users` table.
    

## Running the Application

1. **Start the Backend:**  
    Ensure the backend server is running:
    
    `cd backend node server.js`
    
2. **Start the Frontend:**  
    In a separate terminal:
    
    `cd frontend npm start`
    
3. **Register and Login:**  
    Use the frontend to register new users and log in. Check your database to confirm that user data is stored correctly.
    

## Troubleshooting

- **404 Not Found:**  
    Ensure that the backend routes (e.g., `/api/register`) are correctly mounted.
- **Database Connection Errors:**  
    Verify that your environment variables for database connection are correct.
- **Dependency Issues:**  
    If you see errors related to missing modules (e.g., `bcrypt`), run `npm install` in the appropriate folder.
- **Port Conflicts:**  
    Confirm that no other services are using ports 5001 (backend) or 3000 (frontend).

## Notes

- **Password Security:**  
    Passwords are hashed using bcrypt before storing in the database.
- **Environment Variables:**  
    Keep sensitive information (e.g., database passwords) in your `.env` files and do not commit them to version control.
- **Further Customization:**  
    As the project grows, consider using migration tools (like Knex.js or Flyway) to manage database schema changes.

## Conclusion

Following these instructions should allow you to set up the project locally and get it running quickly—even if you step away for a while. If you encounter any issues or have questions, please refer to this README or reach out for further assistance.


- This README should serve as a comprehensive guide for anyone (including future me) to launch the program locally, covering everything from dependency installation to running the servers and verifying the database.