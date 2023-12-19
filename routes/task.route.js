import { createTask, getTask } from '../controllers/task.controller.js'
import express from 'express'

const taskRouter = express.Router()

taskRouter.post('/', createTask)
taskRouter.get('/', getTask)

export default taskRouter
