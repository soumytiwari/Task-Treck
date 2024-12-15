import mongoose from 'mongoose';
import { Task } from './models/Task.js'; // Update the path based on your project structure.
import dotenv from 'dotenv';

dotenv.config()

const mongoDBURL = process.env.MONGO_DB_URL

const tasks = [
  {
    title: 'Complete the frontend',
    description: 'Work on the React UI for the task management app.',
    createdAt: new Date(),
  },
  {
    title: 'Fix backend bugs',
    description: 'Resolve issues in the Express.js API routes.',
    createdAt: new Date(),
  },
  {
    title: 'Prepare documentation',
    description: 'Write documentation for the API endpoints.',
    createdAt: new Date(),
  },
];

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    await Task.insertMany(tasks);
    console.log('Tasks seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
