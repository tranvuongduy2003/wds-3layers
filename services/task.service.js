import { DB } from '../database/index.js'

export async function createNewTask({ taskName, description }) {
    const { Tasks } = DB

    const newTask = await Tasks.create({
        taskName,
        description,
    })

    return newTask
}
export async function getAllTask() {
    const { Tasks } = DB

    const tasks = await Tasks.findAll()

    return tasks
}
