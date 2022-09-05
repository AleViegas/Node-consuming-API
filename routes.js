import Express from 'express'
import * as dotenv from 'dotenv'
import NodeCache from 'node-cache'

dotenv.config()

const routes = Express.Router()

const cache = new NodeCache({stdTTL: 1800})

async function getWeathers() {
    const API_KEY_OPEN_WEATHER = process.env.API_KEY_OPEN_WEATHER
    const BASE_URL_OPEN_WEATHER = "http://api.openweathermap.org/data/2.5/weather"
    
    const capitals = [{city:"Porto Velho"}, {city:"bla bla bla"}]
    
    const data = await Promise.all(capitals.map(async (capital) => {
    
        const { city } = capital

        const requestUrl = `${BASE_URL_OPEN_WEATHER}?appid=${API_KEY_OPEN_WEATHER}&q=${city}`
        const response = await fetch(requestUrl)
        
        const data = await response.json()
        
        if (response.status !== 200) {
            return {city, message:data.message}
        }
        
        return {city, message:data.main}
    }))

    return data
}

async function openWeather(request, response) {

    let citysWeathers = cache.get('citysweathers')

    if (citysWeathers == null) {
        const data = await getWeathers()
        cache.set('citysweathers', data)
        citysWeathers = data
    }

    response.send(citysWeathers)
}

routes.get('/weather', openWeather)

export default routes