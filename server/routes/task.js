import express, { request, response } from 'express';
import { Task } from '../models/Task';

const router = express.Router()

// POST/tasks (Create)
router.post('/', async (req, res) => {
    try{
        if(!req.body.title) {
            return res.status(400).send({
                message: 'Send all required fields: title',
            })
        }
        const newTask = new Task(req.body)
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch(err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})

// GET/tasks (Read All)
// router.get

export default router;