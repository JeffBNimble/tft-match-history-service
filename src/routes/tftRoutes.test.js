jest.mock('../services/riotApiClient')
import mockRiotApiClient from '../services/riotApiClient'
import { handleGetTFTSummoner } from './tftRoutes'

describe('When fetching summoner info from the riotApiClient, the tft route handler', () => {
  let req = {}
  const mockSend = jest.fn(() => {})
  const res = { send: mockSend }

  beforeEach(() => {
    req.params = {}
  })

  test('fetches summoner info from riotApiClient', async () => {
    req.params.summonerName = 'Zorkanian'
    await handleGetTFTSummoner(req, res)

    expect(mockRiotApiClient.fetchTFTSummonerInfo).toHaveBeenCalledWith('Zorkanian')
  })

  test('sends summoner info to caller', async () => {
    req.params.summonerName = 'Zorkanian'
    await handleGetTFTSummoner(req, res)

    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(mockSend).toHaveBeenCalledWith(undefined)
  })

})