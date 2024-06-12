import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
      payload.logger.info(`Payload API URL: ${payload.getAPIURL()}`)
      payload.logger.info(`Payload Public Port: ${process.env.PAYLOAD_PUBLIC_PORT}`)
    },
  })

  app.use('*', (req, res, next) => {
    if (req.method === 'OPTIONS') {
    return res.status(204).end()
    } else {
      next()
    }
  })

  app.listen(process.env.PAYLOAD_PUBLIC_PORT)
}

start()
