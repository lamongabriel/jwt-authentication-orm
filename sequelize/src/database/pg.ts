import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASS as string,
  {
    dialect: process.env.DATABASE_TYPE as any,
    port: Number(process.env.DATABASE_PORT as string)
  }
)
