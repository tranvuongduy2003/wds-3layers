import Sequelize from 'sequelize'
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASS,
    DB_PORT,
    DB_USER,
    NODE_ENV,
} from '../config/index.js'
import TaskModel from '../models/tasks.model.js'

export const sequelize = new Sequelize.Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASS,
    {
        dialect: 'mysql',
        host: DB_HOST,
        port: parseInt(DB_PORT, 10),
        timezone: '+07:00',
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            underscored: true,
            freezeTableName: true,
        },

        pool: {
            min: 0,
            max: 5,
        },

        logQueryParameters: NODE_ENV === 'development',
        logging: (query, time) => {
            console.log(time + 'ms' + ' ' + query)
        },
        benchmark: true,
        attributeBehavior: 'unsafe-legacy',
        ssl: false,
    }
)

sequelize.authenticate()

const initAllModels = (sequelize) => {
    const Tasks = TaskModel(sequelize)

    // Define constrants

    return {
        Tasks,
    }
}

export const DB = {
    ...initAllModels(sequelize),
    sequelize, // connection instance
    Sequelize, // library
}
