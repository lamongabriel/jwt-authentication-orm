import express from 'express'
import dotenv from 'dotenv'
import appRoutes from './routes'

import { sequelize } from './database/pg'

dotenv.config()

const server = async () => {
  const app = express()

  await sequelize.authenticate()
  console.log('📦 Connected to Sequelize!')

  app.use(express.json())
  app.use(appRoutes)

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`🔥 Server is running at http://localhost:${process.env.SERVER_PORT as string}`)
  })
}

server()
