import { Request, Response } from 'express'
import { z, ZodError } from 'zod'
import { prisma } from '../database/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthController {
  async authenticate (req: Request, res: Response) {
    try {
      const requestData = z.object({
        email: z.string().email(),
        pass: z.string()
      })

      const { email, pass } = requestData.parse(req.body)

      const userExists = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if (!userExists) {
        return res.status(401).json({
          message: 'User was not found in the database.'
        })
      }

      const isValidPass = await bcrypt.compare(pass, userExists.pass)

      if (!isValidPass) {
        return res.status(401).json({
          message: 'Invalid user password.'
        })
      }

      const token = jwt.sign({ id: userExists.id }, process.env.SECRET as string, { expiresIn: '1d' })

      const { pass: password, ...user } = userExists

      res.status(200).json({
        user,
        token
      })
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(error.errors)
      }
      return res.sendStatus(500)
    }
  }
}

export default new AuthController()
