import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'

import { z, ZodError } from 'zod'

import User from '../models/User'

class UserController {
  async createAccount (req: Request, res: Response) {
    try {
      const repository = AppDataSource.getRepository(User)

      const requestData = z.object({
        email: z.string(),
        pass: z.string()
      })

      const { email, pass } = requestData.parse(req.body)

      const userExists = await repository.findOne({
        where: {
          email
        }
      })

      if (userExists) {
        return res.status(409).json({
          message: 'E-mail is alrealdy being used.'
        })
      }

      const user = repository.create({
        email,
        pass
      })

      await repository.save(user)

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
