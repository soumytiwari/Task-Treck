import express, { request, response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv'; // or import dotenv/config.js
import dotenv from 'dotenv';
// import { port, mongoDBURL } from './config.js';
import taskRoutes from './routes/task.js'


dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const mongoDBURL = process.env.MONGO_DB_URL

// Middleware
app.use(
    cors({
        origin: 'http://localhost:3000/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)                // specified use of 'cors'
// app.use(cors())         // enable CORS for all origins
app.use(express.json())         // parse incoming req with JSON payloads.


// create http route
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome!')
})

// Use task routes
app.use('/tasks', taskRoutes)

// connect database
mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database')
    // listen port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})
