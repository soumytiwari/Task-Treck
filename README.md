# Project Title

A simple Task Management Application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

---

## Steps to Set Up and Run the Application Locally

### Prerequisites
1. Ensure you have the following installed on your system:
   - **Node.js** (v16 or higher)
   - **MongoDB** (running locally or use a cloud provider like MongoDB Atlas)
   - **Git**

### Clone the Repository
```bash
# Clone this repository to your local machine
git clone https://github.com/soumytiwari/Task-Treck.git

# Navigate to the project folder
cd Task-Treck
```

### Set Up the Server
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` folder and add the following:
   ```env
   PORT=3000
   MONGO_DB_URL=<your-mongodb-connection-string>
   ```
4. Seed the database with initial data (optional):
   ```bash
   node seedTasks.js
   ```
5. Start the server:
   ```bash
   npm start
   ```
   The server will be running at `http://localhost:3000`.

### Set Up the Client
1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm run dev
   ```
   The client will be running at `http://localhost:5173`.

### Access the Application
- Open your browser and navigate to `http://localhost:5173` to access the application.

---

## Additional Features Implemented

1. **CRUD Operations**:
   - Create, Read, Update, and Delete tasks with a user-friendly interface.
2. **Responsive UI**:
   - Fully responsive design for various screen sizes.
3. **Error Handling**:
   - Graceful error messages for failed API requests.
4. **Reusable Components**:
   - Modular components for scalability.
5. **Database Seeding**:
   - Preload tasks into the database using the `seedTasks.js` script.

---

## Deployed Application
- Visit the deployed application [here](https://your-deployment-link).

---

Feel free to contribute to this project by submitting a pull request or reporting issues!

