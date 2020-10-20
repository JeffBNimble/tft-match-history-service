import express from 'express'

function getTestRoutes() {
  const router = express.Router()
  router.get('/v1/hello', handleHelloWorldRequest)
  return router
}

async function handleHelloWorldRequest(req, res) {
  res.json({ message: "Hello, World!" })
}

export { getTestRoutes }