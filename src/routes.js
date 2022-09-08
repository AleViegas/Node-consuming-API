import Express from 'express'
import openWeatherController from './controllers/openWeatherController.js'

const routes = Express.Router()

routes.get('/weather', openWeatherController.show)

export default routes