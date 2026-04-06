# News Portal: A news website

A full-stack News Aggregator web application that fetches the latest news articles and displays them in a modern UI.  
The application supports authentication, dark mode, category filtering, country-based news, and pagination.

---

## Features

- Latest news feed
- Category-based headlines
- Country-specific news
- Dark / Light mode toggle
- User authentication (Email, Google, GitHub)
- Responsive UI
- Pagination for news results

---

## Tech Stack

Frontend:
- React
- Vite
- TailwindCSS
- React Router
- Axios

Backend:
- Node.js
- Express
- News API integration

Authentication:
- Firebase Authentication

---

## Project Structure
news-portal
│
├── client # React frontend
│ ├── src
│ ├── public
│ └── package.json
│
├── server # Node backend
│ └── index.js
│
└── README.md



---

## Installation

Clone the repository:
git clone https://github.com/PrasannaBhavan2005/news-portal.git

Navigate to the project folder:
cd news-portal


---

## Install Dependencies

### Client
cd client
npm install


### Server
cd ../server
npm install


---

## Environment Variables

Create a `.env` file in the **client** folder:
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


---

## Running the Application

### Start Backend Server

cd server
node index.js

http://localhost:5000

### Start Frontend

Open a new terminal:
cd client
npm run dev


Frontend runs on:
http://localhost:5173
















