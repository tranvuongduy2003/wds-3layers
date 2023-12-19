import express from 'express'
import { HOST_NAME, NODE_ENV, PORT } from './config/index.js'
import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { ErrorMiddleWare } from './middlewares/error.middleware.js'
import { DB } from './database/index.js'
import taskRouter from './routes/task.route.js'

// init
const app = express()
const env = NODE_ENV || 'development'
const port = PORT || 3000

// connect to database
DB.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log('Database connected!')
    })
    .catch((err) => {
        console.log(err)
    })

// init middlewares
app.use(
    morgan('dev', {
        stream: {
            write: (message) => {
                console.log(message)
            },
        },
    })
) //logging
app.use(cors()) // security
app.use(compression()) // performance
app.use(express.json()) // parsing json request payload to body
app.use(express.urlencoded({ extended: true })) // parsing urlencoded request payload to body
app.use(cookieParser()) // parsing cookie to object

// init routes
app.use('/tasks', taskRouter)

// init swagger
const specs = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: 'Webdev Studios Training 3 Layers',
            version: '1.0.0',
            description: 'API Documentation for this project',
        },
    },
    apis: ['swagger.yaml'],
})
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(specs))

// init error handling
app.use(ErrorMiddleWare)

// listen to port
app.listen(port, () => {
    console.log('====================================')
    console.log(`======== ENV: ${env} ==========`)
    console.log(`App listening on http://${HOST_NAME}:${port}`)
    console.log(
        `API Documentation on http://${HOST_NAME}:${port}/documentation`
    )
    console.log('====================================')
})
