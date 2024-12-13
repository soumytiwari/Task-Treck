import express, { request, response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv'; // or import dotenv/config.js
import dotenv from 'dotenv';
import { port } from './config.js';

const app = express()
app.use(cors())         // enable CORS for all origins
app.use(express.json())         // parse incoming req with JSON payloads.

dotenv.config()

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}
)