import express, { request, response } from 'express';
import { Task } from '../models/Task.js';

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
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json({
            count: tasks.length,
            data: tasks
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: err.message
        })
    }
})

// GET/task/:id (Read One)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
    }
})

// PUT/tasks/:id (Update)
router.put('/:id', async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true} )
        res.status(200).json(updatedTask)
    } catch (err) {
        console.log(err.message)
        res.status(400).json({ message:err.message})
    }
})

// DELETE/tasks/:id (Delete)
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: 'Task deleted'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
})

export default router;