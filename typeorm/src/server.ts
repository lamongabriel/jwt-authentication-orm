import express from 'express'
import dotenv from 'dotenv'
import appRoutes from './routes'
import { AppDataSource } from './data-source'

import 'reflect-metadata'

dotenv.config()

const server = async () => {
  await AppDataSource.initialize()
  console.log('📦 Connected to PostgreSQL')

  const app = express()

  app.use(express.json())
  app.use(appRoutes)

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`🔥 Server is running at http://localhost:${process.env.SERVER_PORT as string}`)
  })
}

server()
