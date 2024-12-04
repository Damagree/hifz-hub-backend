# 🕌 **Hifz Hub Backend**  
A robust backend for **Hifz Hub**, a web app designed to assist Muslims in memorizing and reviewing Tuhfatul Athfal, Jazariyyah, and other Islamic texts. This backend serves as the foundation for features such as user authentication, Muroja'ah (review), Ziyadah (new memorization), and quizzes. 🚀  

---

## 📖 **Table of Contents**  
- [🚀 Features](#-features)  
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)  
- [📂 Folder Structure](#-folder-structure)  
- [🔧 How to Run the Project Locally](#-how-to-run-the-project-locally)  
- [📝 Backend Features](#-backend-features)  
- [📈 Future Enhancements](#-future-enhancements)  

---

## 🚀 **Features**  
- 🧑‍💻 **User Authentication**: Secure login and registration with JWT-based authentication.  
- 📖 **Muroja'ah Module**: Log and track review sessions for memorized sections.  
- 🆕 **Ziyadah Module**: Add and manage new memorization goals.  
- 🎲 **Quizzes**: Multiple-choice and recitation-based quizzes for random reviews.  
- 💾 **Database Integration**: All data is stored in a MongoDB database for reliability and scalability.  
- 🌐 **RESTful APIs**: Clear and extendable endpoints for frontend integration.  

---

## 🛠️ **Tech Stack**  

| Component        | Technology Used        | Description                                           |  
|------------------|------------------------|-------------------------------------------------------|  
| Backend Framework| [Express.js](https://expressjs.com) | Lightweight framework for building APIs.              |  
| Database         | [MongoDB](https://www.mongodb.com)  | NoSQL database for storing application data.          |  
| Authentication   | [JWT](https://jwt.io)               | Secure token-based authentication.                   |  
| Dev Environment  | [dotenv](https://github.com/motdotla/dotenv) | Environment variable management.                      |  
| Password Hashing | [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) | Secure password hashing for user data.                |  

---

## 📂 **Folder Structure**  

```
hifz-hub-backend/
├── src/
│   ├── modules/
│   │   ├── auth/           # User authentication (login, register)
│   │   ├── murojaah/       # Muroja'ah (Review) module
│   │   ├── ziyadah/        # Ziyadah (New memorization) module
│   │   ├── quizzes/        # Quizzes module
│   ├── config/             # Database configuration
│   ├── utils/              # Helper functions (future-proofing)
├── server.js               # Main server file
├── .env                    # Environment variables
├── .gitignore              # Ignored files and folders
├── package.json            # Dependencies and scripts
```

---

## 🔧 **How to Run the Project Locally**  

### **Prerequisites**  
1. Install [Node.js](https://nodejs.org/).  
2. Install [MongoDB](https://www.mongodb.com/) or set up a cloud instance using MongoDB Atlas.  

### **Steps**  
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/Damagree/hifz-hub-backend.git
   cd hifz-hub-backend
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory:  
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Start the server**:  
   ```bash
   npm start
   ```

5. **Test the APIs**:  
   Use a tool like **Postman** or **Insomnia** to test endpoints.

---

## 📝 **Backend Features**  

### 1️⃣ **Authentication**  
- **Endpoints**:  
  - `POST /api/auth/register`: Register a new user.  
  - `POST /api/auth/login`: Login with username and password.  

- **Details**:  
  - Passwords are hashed using **bcrypt.js**.  
  - Tokens are generated using **JWT**, which includes user roles for scalability (e.g., admin, user).  

---

### 2️⃣ **Muroja'ah Module**  
- **Endpoints**:  
  - `POST /api/murojaah/add`: Add a new review session.  
  - `GET /api/murojaah/list`: List all review sessions.  

- **Details**:  
  - Tracks the **section**, **date**, and **completion status**.  

---

### 3️⃣ **Ziyadah Module**  
- **Endpoints**:  
  - `POST /api/ziyadah/add`: Add a new memorization goal.  
  - `GET /api/ziyadah/list`: List all memorization goals.  

- **Details**:  
  - Helps users focus on incremental memorization of new materials.  

---

### 4️⃣ **Quizzes**  
- **Endpoints** (Planned):  
  - `POST /api/quizzes/start`: Start a new quiz session.  
  - `POST /api/quizzes/submit`: Submit answers.  

- **Details**:  
  - Quiz types:
    - **Multiple Choice**: Choose the correct answer.
    - **Recitation-Based**: Upload or record a recitation for review.

---

## 📈 **Future Enhancements**  
- **Discussion Page**: Add a module for users to discuss questions or share tips.  
- **Real-time Features**: Use WebSockets for real-time interaction.  
- **Mobile/Desktop Apps**: Extend functionality with cross-platform compatibility using the same backend.  

---

Feel free to reach out with any questions or contributions! ✨