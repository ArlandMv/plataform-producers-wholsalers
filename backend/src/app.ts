import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
//import Joi from 'joi' //input validation

//import config from './config'
//data
import userRoutes from './routes/users.routes'

const app = express()

// environment
app.set('port', process.env.PORT || 3000)

// middelwares
app.use(helmet())
if (app.get('env') === 'development') app.use(morgan('dev'))
app.use(cors()) //allow reqs from any server
app.use(express.json())
app.use(express.urlencoded({extended:false})) //formulario->json

// routes
app.use('/api',userRoutes)

export default app