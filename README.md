# 🧑‍💼 JobHunt Pro

![JobHunt Pro Logo](./assets/logo.png)

**JobHunt Pro** is a modern full-stack job board web application that allows users to search and apply for jobs, while recruiters can post and manage job listings. Built with **React**, **Node.js**, **Redux**, and **Tailwind CSS**, it uses a **Search API** for efficient job filtering and features secure **authentication** for users and admins.

![Screenshot](./assets/job-site-screenshot.png)

---

## 🚀 Features

- 🔍 **Search API Integration** for fast and accurate job searching
- 🧾 **Post and Manage Jobs** for employers
- 👨‍💼 **User Authentication** with JWT (Sign Up / Login / Logout)
- 🌐 **Responsive UI** using Tailwind CSS
- 💾 **Redux Toolkit** for state management
- ✉️ **Contact and Application Forms**
- 📂 **Role-based access** for users and recruiters
- 📈 **Pagination and Filtering** for listings
- ☁️ **REST API** with Express and MongoDB

---

## 🛠️ Tech Stack

| Frontend     | Backend       | Styling        | Auth         | API         |
|--------------|---------------|----------------|--------------|-------------|
| React        | Node.js       | Tailwind CSS   | JWT          | Custom Search API |
| Redux Toolkit| Express.js    | DaisyUI (opt.) | bcrypt       |             |
| Axios        | MongoDB       |                |              |             |

---

## 📁 Folder Structure


---

## 🧑‍💻 Getting Started

### 📦 Prerequisites

- Node.js v18+
- MongoDB
- npm or yarn

### 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/jobhunt-pro.git
cd jobhunt-pro

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
# In one terminal - backend
cd server
npm run dev

# In another terminal - frontend
cd client
npm start
