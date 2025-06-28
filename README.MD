## ✅ `README.md` — for Your Role-Based Auth System

```markdown
# 🔐 Role-Based Authentication System (Admin & User Access Control)

Welcome to my **Role-Based Authentication System** — a secure and scalable user management backend built with **Node.js**, **Express**, and **JWT**. This system is designed for projects where access control between **Admin** and **User** roles is a must.

---

## 🚀 Features

- ✅ **JWT-Based Authentication**
- 🔑 **Role-Based Authorization** (Admin & User separation)
- 🔄 **Separate Login Routes** for Admin and User
- 🧱 Modular Code Structure (Middleware, Controllers, Routes)
- 🔐 Protected API Routes using Custom Middleware
- 🧪 Easy to test with Postman or integrate into frontend

---

## 🧠 How It Works

This system is designed with **separation of access** in mind:

### 👤 User Flow:
- A user signs up or logs in via `/api/auth/login`
- Receives a **JWT** token with role `"user"`
- Can access only user-specific routes (e.g., profile, orders)

### 🛡️ Admin Flow:
- Admin logs in via `/api/admin/login`
- Receives a **JWT** token with role `"admin"`
- Can access admin-only routes like:
  - `GET /api/admin/users/all` → Fetch all users
  - `POST /api/admin/products` → Manage products
- Protected by `verifyToken`, `requireAdmin`, and an optional `x-admin-access-key` header

---

## 🧱 Tech Stack

- **Node.js** + **Express**
- **MongoDB** with Mongoose
- **JWT** for token generation
- **BcryptJS** for password hashing
- **dotenv** for config management

---

## 📁 Project Structure

```
📦 project-root
├── controllers/
│   ├── auth/
│   │   ├── loginUser.js
│   │   └── loginAdmin.js
│   └── admin/
│       └── userController.js
├── middleware/
│   ├── verifyToken.js
│   ├── requireAdmin.js
│   └── checkAdminHeader.js
├── models/
│   └── User.js
├── routes/
│   ├── user/
│   └── admin/
├── .env
├── index.js
```

---

## 🔐 Security Practices

- Tokens contain `role` info and expire in 1 hour
- Admin routes require role verification + optional secret header
- Passwords are hashed with `bcryptjs`
- Sensitive config handled using `.env`

---

## 📌 Setup Instructions

```bash
git clone https://github.com/your-username/role-based-auth-system
cd role-based-auth-system
npm install
npm start
```

Create a `.env` file with:

```
PORT = your port
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=you@example.com
ADMIN_ACCESS_KEY=your_custom_admin_key
```

---

## 📬 Want to Integrate in Frontend?

This backend is perfect for React, Next.js, Vue, or any SPA.  
Just store the token after login and use `jwt-decode` to read the role for UI control.

---

## 💬 Example JWT Payload

```json
{
  "id": "user123",
  "role": "admin",
  "iat": 1720000000,
  "exp": 1720003600
}
```

---

## 🤝 Contributing

Pull requests and feedback are welcome! If you'd like to add testing, documentation, or frontend integration, feel free to fork and build on top of this system.

---

## 📃 License

MIT — feel free to use, modify, and share.

---

## 🔥 Built with ❤️ by Abdul Moiz
```

---
