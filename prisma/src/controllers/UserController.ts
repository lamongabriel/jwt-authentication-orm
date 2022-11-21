import { Request, Response } from 'express'
import { prisma } from '../database/prisma'
import { z, ZodError } from 'zod'

class UserController {
  async createAccount (req: Request, res: Response) {
    try {
      const registerData = z.object({
        email: z.string().email(),
        pass: z.string()
      })

      const { email, pass } = registerData.parse(req.body)

      const userExists = await prisma.user.findFirst({ where: { email } })

      if (userExists) {
        return res.status(409).json({
          message: 'E-mail is alrealdy being used.'
        })
      }

      const user = await prisma.user.create({
        data: {
          email,
          pass
        }
      })

      res.status(201).json(user)
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(error.errors)
      }
      return res.sendStatus(500)
    }
  }

  secretData (req: Request, res: Response) {
    res.json([
      {
        name: 'Super Secret Data 01'
      },
      {
        name: 'Super Secret Data 02'
      }
    ])
  }
}

export default new UserController()
