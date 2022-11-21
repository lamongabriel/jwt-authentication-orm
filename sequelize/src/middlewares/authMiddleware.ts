import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(403)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.SECRET as string)

    const { id } = data as TokenPayload

    req.userId = id

    return next()
  } catch {
    return res.sendStatus(403)
  }
}
