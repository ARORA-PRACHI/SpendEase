<h1 align="center">
  💸 Welcome to SpendEase – Track Your Expenses Effortlessly! 📊
</h1>

<p align="center">
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fexpense-tracking&psig=AOvVaw1LAsDXFa5UqR4M5mLnc1QY&ust=1748405556486000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMiamLbkwo0DFQAAAAAdAAAAABAL">
</p>

<p align="center">
  SpendEase is a full-stack personal finance management platform that helps users track income, expenses, and visualize spending habits. <br/>
  <strong>Built using:</strong> React, Vite, Tailwind CSS, Node.js, Express, and MySQL.
</p>

<p align="center">
  <a href="#features">🚀 Explore Features</a> • 
  <a href="#tech-stack">🧰 Tech Stack</a> • 
  <a href="#installation">📦 Installation</a>
</p>

---

## 🚀 Features

 🔍 User-Facing
- 👤 User Registration & Login
- 💸 Add & Categorize Income/Expenses
- 📅 Track Daily, Weekly, Monthly Expenses
- 📊 Visual Charts for Spending Analysis (Pie & Bar Charts)
- 🔍 Filter by Date, Category, or Type

---

## 🧰 Tech Stack

 🖥️ Frontend
- ⚛️ [React](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 📜 JavaScript (ES6+)
- 📊 [Chart.js](https://www.chartjs.org/) for Graphs

 🔧 Backend
- 🧩 [Node.js](https://nodejs.org/)
- 🚂 [Express.js](https://expressjs.com/)
- 🛢️ [MongoDB](https://www.mongodb.com)
---

## 🔐 Authentication & Security

- 🔒 Password hashing with `bcrypt`
- 🔑 JWT-based Authentication
- ⚠️ Secure Routes with Role-based Access (User/Admin)
- 🛡️ `.env` configuration for environment security

---

## 🗂️ Project Structure

```bash
SPENDEASE/
├── client/         # React + Vite Frontend
│   ├── src/
│   ├── components/
│   └── pages/
├── server/         # Express Backend
│   ├── config/     # DB + Sequelize Setup
│   ├── controllers/
│   ├── models/
│   └── routes/
├── .env
└── README.md
