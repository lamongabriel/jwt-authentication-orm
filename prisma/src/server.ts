import express from 'express'
import dotenv from 'dotenv'
import appRoutes from './routes'
import { prisma } from './database/prisma'

dotenv.config()

const server = async () => {
  const app = express()

  await prisma.$connect()

  app.use(express.json())
  app.use(appRoutes)

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`🔥 Server is running at http://localhost:${process.env.SERVER_PORT as string}`)
  })
}

server()
