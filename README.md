# Node CRUD API

A lightweight RESTful API built with **pure Node.js**, without using any frameworks, to perform basic CRUD (Create, Read, Update, Delete) operations for user management.

---

## 🚀 Features

- ✅ Create users  
- 📋 List users (with optional filtering by `name` or `email`)  
- ✏️ Update user information  
- 🗑️ Delete users  

All data is stored in a local `db.json` file.

---

## 📁 Project Structure

node-crud-api/
│
├── db.json # JSON file used as database
├── server.js # HTTP server setup
├── routes.js # API route definitions
├── database.js # Database class with CRUD methods
│
├── middlewares/
│ └── json.js # JSON body parser middleware
│
├── utils/
│ ├── build-route-path.js # Utility to build RegEx for dynamic routes
│ └── extract-query-params.js # Extracts query parameters from URL

---

## 🧑‍💻 How to Run

1. Clone the repository:
bash
`git clone git@github.com:andredevic/node-crud-api.git
cd node-crud-api`

2. Start the project with Node.js:
 bash
`node src/server.js`
The server will be running at http://localhost:3333.

📬 Request Examples

🔹 Create User
POST /users
JSON
`Request Body:
{
  "name": "Ana Souza",
  "email": "ana@example.com"
}`
📡 Response: 201 Created

🔹 List Users
GET /users

List all users:
GET /users

Search by name or email:
GET /users?search=ana
📡 Example Response:
`[
  {
    "id": "uuid",
    "name": "Ana Souza",
    "email": "ana@example.com"
  }
]`

🔹 Update User
PUT /users/:id
Request Body:
`{
  "name": "Ana Beatriz",
  "email": "ana.beatriz@example.com"
}`
📡 Response: 204 No Content

🔹 Delete User
DELETE /users/:id
📡 Response: 204 No Content

---

🧠 Key Concepts
Pure Node.js (no Express or frameworks)

Native http module to create the server

File handling using fs/promises

Dynamic route handling with RegEx

Custom JSON body parsing middleware

Extracting route and query parameters with RegEx

Simple persistence using db.json

Code modularization with ESModules (import/export)

---

🪪 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

---

✨ Author
Made with ❤️ by André Ferreira




