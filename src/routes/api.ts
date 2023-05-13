import { NextFunction, Request, Response } from "express"

const express = require('express')
const router = express.Router()

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/links', (req: Request, res: Response) => {
  res.json({
    "id": 1,
  });
})

router.patch('/links', (req: Request, res: Response) => {
  res.send('')
})

router.post('/links', (req: Request, res: Response) => {
  res.send('')
})

router.delete('/links', (req: Request, res: Response) => {
  res.send('')
})

export default router;