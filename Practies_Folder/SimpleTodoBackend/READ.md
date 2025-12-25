Sure Ritik 👍
Here’s a **step-by-step guide to create an Express.js application from scratch** (beginner-friendly + best practices).

---

## 1️⃣ Prerequisites

Make sure you have:

* **Node.js** installed

  ```bash
  node -v
  npm -v
  ```

If not installed → [https://nodejs.org](https://nodejs.org)

---

## 2️⃣ Create Project Folder

```bash
mkdir express-app
cd express-app
```

---

## 3️⃣ Initialize Node Project

```bash
npm init -y
```

This creates a `package.json` file.

---

## 4️⃣ Install Express

```bash
npm install express
```

(Optional but recommended)

```bash
npm install nodemon --save-dev
```

---

## 5️⃣ Create Entry File

Create a file named **`index.js`** (or `app.js`)

```bash
touch index.js
```

---

## 6️⃣ Basic Express Server Code

Add this to `index.js`:

```js
const express = require("express");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello Express JS 🚀");
});

app.get("/api/users", (req, res) => {
  res.json({ users: ["Ritik", "Aman", "Rahul"] });
});

// server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 7️⃣ Run the Server

### Using Node

```bash
node index.js
```

### Using Nodemon (recommended)

Add this to `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run:

```bash
npm run dev
```

---

## 8️⃣ Test in Browser / Postman

* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/api/users](http://localhost:3000/api/users)

---

## 9️⃣ Recommended Project Structure (Best Practice)

```text
express-app/
│── node_modules/
│── src/
│   ├── routes/
│   │   └── user.routes.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── middlewares/
│   ├── config/
│   └── app.js
│── index.js
│── package.json
│── .env
```

---

## 🔟 Example Route File

**`src/routes/user.routes.js`**

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "User list" });
});

module.exports = router;
```

**`index.js`**

```js
const express = require("express");
const userRoutes = require("./src/routes/user.routes");

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3000, () => console.log("Server started"));
```

---

## 1️⃣1️⃣ Useful Packages (Next Steps)

```bash
npm install dotenv cors mongoose
```

* **dotenv** → environment variables
* **cors** → frontend-backend communication
* **mongoose** → MongoDB

---

## 1️⃣2️⃣ Express Generator (Optional Shortcut)

```bash
npx express-generator
```

---

### 🚀 What next?

Since you already work with **MERN & backend (Node, MongoDB)**:

* Want **Express + MongoDB CRUD**
* JWT Authentication
* REST API structure
* Express + Sequelize (SQL)
* Express + Spring Boot comparison

Tell me what you want next 👍


## ----------- with Auth ---------
Great 👍
Now let’s **MODIFY the TODO BACKEND** so that:

✅ Todos are **AUTHENTICATED**
✅ Each todo belongs to a **logged-in user**
✅ Uses **JWT Authentication**
✅ Clean **industry-standard backend structure**

I’ll explain **WHAT**, **WHY**, and **HOW** step-by-step.

---

# 🧠 BACKEND TECH STACK

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **bcrypt (password hashing)**

---

# 📁 BACKEND FOLDER STRUCTURE (CLEAN)

```
backend/
│
├── config/
│   ├── db.js
│   └── jwt.js
│
├── controllers/
│   ├── authController.js
│   └── todoController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Todo.js
│
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

# 1️⃣ DATABASE CONNECTION

### `config/db.js`

```js
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
};
```

---

# 2️⃣ USER MODEL (AUTH BASE)

### `models/User.js`

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model("User", userSchema);
```

---

# 3️⃣ TODO MODEL (LINKED TO USER 🔐)

### `models/Todo.js`

```js
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: String,
    completed: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", todoSchema);
```

👉 **IMPORTANT**
Each todo is now **owned by a user**.

---

# 4️⃣ AUTH MIDDLEWARE (JWT GUARD)

### `middleware/authMiddleware.js`

```js
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
```

🔐 This **protects todo routes**

---

# 5️⃣ AUTH CONTROLLER

### `controllers/authController.js`

```js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });

  res.json({
    token: generateToken(user._id),
    user: { id: user._id, username, email },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    token: generateToken(user._id),
    user: { id: user._id, username: user.username, email },
  });
};
```

---

# 6️⃣ TODO CONTROLLER (AUTH + CRUD)

### `controllers/todoController.js`

```js
import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user });
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    completed: false,
    user: req.user,
  });
  res.json(todo);
};

export const updateTodo = async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    { text: req.body.text },
    { new: true }
  );
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.json({ message: "Deleted" });
};
```

🔐 User can access **ONLY THEIR TODOS**

---

# 7️⃣ ROUTES

### `routes/authRoutes.js`

```js
import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
```

---

### `routes/todoRoutes.js`

```js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.use(protect); // 🔐 PROTECTED ROUTES

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
```

---

# 8️⃣ SERVER ENTRY

### `server.js`

```js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

# 9️⃣ ENV FILE

### `.env`

```
MONGO_URI=mongodb://localhost:27017/todo-auth
JWT_SECRET=supersecretkey
```

---

# 🔥 WHAT WE ACHIEVED

✔ Todos are **user-specific**
✔ JWT protected routes
✔ Secure backend
✔ Scalable structure
✔ Perfect for Redux Toolkit + AsyncThunk

---

## NEXT STEPS (OPTIONAL)

* Connect frontend `createAsyncThunk`
* Add refresh token
* Add role-based access
* Deploy backend

If you want 👉 **frontend integration next**, say **“connect frontend”** 🚀

## ----- command for install depedecie ---
Sure 👍
Here are **ALL REQUIRED INSTALL COMMANDS** for the **Todo Backend with Authentication (Node + Express + MongoDB + JWT)**.

---

## 📦 1️⃣ Initialize Backend Project

```bash
npm init -y
```

---

## 📦 2️⃣ Install Production Dependencies

```bash
npm install express mongoose dotenv jsonwebtoken bcryptjs cors
```

### 🔍 Why each package?

| Package      | Purpose                 |
| ------------ | ----------------------- |
| express      | Backend framework       |
| mongoose     | MongoDB ODM             |
| dotenv       | Environment variables   |
| jsonwebtoken | JWT authentication      |
| bcryptjs     | Password hashing        |
| cors         | Allow frontend requests |

---

## 📦 3️⃣ Install Development Dependencies

```bash
npm install --save-dev nodemon
```

---

## 📦 4️⃣ Update `package.json` Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 📦 5️⃣ Run the Backend Server

```bash
npm run dev
```

---

## ✅ FINAL CHECKLIST

✔ MongoDB running
✔ `.env` file created
✔ Correct folder structure
✔ Server running on port **5000**

---

## 🚀 NEXT STEP

Say **“connect frontend”**
I’ll wire **Redux Toolkit + createAsyncThunk + Auth + Todo CRUD** step-by-step 🔥
