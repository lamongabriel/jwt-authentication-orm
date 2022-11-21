import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

// Models
import User from './models/User'

// Migrations
import { createUsersTable1669033765044 } from './database/migrations/1669033765044-createUsersTable'

dotenv.config()

export const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE as 'postgres',
  host: process.env.DATABASE_URL,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [
    User
  ],
  migrations: [
    createUsersTable1669033765044
  ]
})
