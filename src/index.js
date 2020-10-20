import logger from 'loglevel'
import { startServer } from './start'

const isTest = process.env.NODE_ENV === 'test'
const logLevel = process.env.LOG_LEVEL || (isTest ? 'warn' : 'info')

logger.setLevel(logLevel)

process.env["NODE_CONFIG_DIR"] = __dirname + "/config/"

startServer()