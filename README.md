# 🌍 Bhumi – Smart Waste Management Platform

Bhumi is a full-stack web application built to promote **cleanliness, recycling, and smart waste management**.
It allows users to report waste, track contributions, get reuse ideas, and interact with an intelligent chatbot.

---

## 🚀 Features

### 👤 User Authentication

* Signup & Login system
* Secure user session (localStorage based)
* Personalized dashboard

### 📸 Waste Reporting

* Upload waste images
* Add location and description
* Store data in MongoDB

### 📊 Dashboard

* Total reports count
* Contributions tracking
* Stars earned
* Recent activity feed

### 🌐 Bhumi Media Feed

* View waste reports from users
* Promote environmental awareness

### ♻️ AI Reuse Suggestion

* Get creative ideas to reuse waste items
* Covers plastic, wood, cloth, metal, etc.

### 🤖 AI Chatbot (Offline – No API)

* Answers academic questions on waste management
* Includes Indian laws & policies
* Works without internet API (free & stable)

---

## 🧠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Tools:** Git, GitHub

---

## 📁 Project Structure

```
bhumi-backend/
│
├── models/
│   ├── User.js
│   ├── Waste.js
│
├── routes/
│   ├── auth.js
│   ├── upload.js
│   ├── dashboard.js
│   ├── getWaste.js
│   ├── aiSuggestion.js
│   ├── chatbot.js
│   ├── contribution.js
│
├── controllers/        (if used)
├── uploads/            (ignored in Git)
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
│
├── home.html
├── index.html
├── dashboard.html
├── feed.html
├── reuseAI.html
├── chatbot.html
├── login.html
├── signup.html
├── contribution.html
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Create `.env` File

Create a file named `.env` in the root folder and add:

```
MONGO_URI=your_mongodb_connection_string
```

👉 Example:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bhumiDB
```

---

### 4️⃣ Run the Server

```
npm start
```

---

### 5️⃣ Open in Browser

```
http://localhost:5000/home.html
```

---

## ⚠️ Important Notes

* ❌ Do NOT upload `.env` file (contains sensitive data)
* ❌ Do NOT upload `node_modules/`
* 📁 `uploads/` folder is used for storing images
* Make sure MongoDB is connected properly

---

## 🌍 Indian Waste Management Laws Covered

* Solid Waste Management Rules, 2016
* Plastic Waste Management Rules, 2016
* E-Waste Management Rules, 2016
* Biomedical Waste Management Rules, 2016
* Swachh Bharat Mission

---

## 🎯 Future Improvements

* 🌐 Deploy project online (Render / Vercel)
* 📊 Leaderboard system
* 🧠 Smarter chatbot (NLP-based)
* 📱 Fully responsive UI
* 🔐 JWT authentication

---

## 👨‍💻 Author

**Satyam Tiwari**
B.Tech CSE Student

---

## 🌱 Goal

To encourage people to:

* Reduce waste
* Reuse materials
* Recycle efficiently

👉 Making environment cleaner using technology 💚

---

## ⭐ Support

If you like this project:

* ⭐ Star this repository
* 🍴 Fork it
* 📢 Share with others

---
