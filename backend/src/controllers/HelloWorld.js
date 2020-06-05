import { Router } from 'express'

import { HelloWorldService } from '../services/HelloWorld'

export const HelloWorldController = (() => {
  const router = Router()
  const helloWorldService = new HelloWorldService()
  return () => {
    router.get('/helloWorld', (req, res, next) => {
      res.json(helloWorldService.find())
    })

    return router
  }
})()