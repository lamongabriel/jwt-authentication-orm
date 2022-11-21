import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export const prisma = new PrismaClient()

prisma.$use(async (params, next) => {
  if (params.model === 'User' && params.action === 'create') {
    const hashedPassoword = bcrypt.hashSync(params.args.data.pass, 8)
    params.args.data.pass = hashedPassoword
  }

  const result = await next(params)
  return result
})
