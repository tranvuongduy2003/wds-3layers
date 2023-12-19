import { DataTypes, Model } from 'sequelize'

export class TaskModel extends Model {}

const initModel = (sequelize) => {
    TaskModel.init(
        {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            taskName: {
                type: DataTypes.STRING,
                // allowNull defaults to true
            },
            description: {
                type: DataTypes.STRING,
                // allowNull defaults to true
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            tableName: 'taskModel', // We need to choose the model name
        }
    )

    return TaskModel
}

export default initModel
