import express from 'express'
import riotApiClient from '../services/riotApiClient'

function getTFTRoutes() {
  const router = express.Router()
  router.get('/v1/summoner/:summonerName', handleGetTFTSummoner)
  return router
}

async function handleGetTFTSummoner(req, res) {
  const summonerName = req.params.summonerName

  try {
    const summonerInfoJson = await riotApiClient.fetchTFTSummonerInfo(summonerName)
    res.send(summonerInfoJson)
  } catch (e) {
    return res.status(500).send(`Unable to fetch summoner ${summonerName}: ${e.message}`)
  }
}

export { getTFTRoutes, handleGetTFTSummoner }