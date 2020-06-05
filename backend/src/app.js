import express from 'express'

import 'reflect-metadata'

import { json, urlencoded } from 'body-parser'

import cors from 'cors'
import passport from 'passport'
import compression from 'compression'

import { PORT } from './configs/host'
import { HelloWorldController } from './controllers/HelloWorld'

const logger = require('morgan')

const app = express()

app.set('port', process.env.PORT || PORT)

app.use(json({ limit: '50mb' }))
app.use(urlencoded({ extended: true }))

app.use(cors())

app.use(compression())

app.use(logger('dev'))

app.use(passport.initialize())

// ! No auth for now - Direct connection to router
// ! Change these base routes 
app.use('/', HelloWorldController())

export default app
