import { createNewTask, getAllTask } from '../services/task.service.js'

export async function createTask(req, res, next) {
    try {
        const newTask = await createNewTask(req.body)

        res.status(201).json({
            data: newTask,
            message: 'Create new task successfully!',
        })
    } catch (error) {
        next(error)
    }
}

export async function getTask(req, res, next) {
    try {
        const tasks = await getAllTask()

        res.status(200).json({
            data: tasks,
            message: 'Get all tasks successfully!',
        })
    } catch (error) {
        next(error)
    }
}
