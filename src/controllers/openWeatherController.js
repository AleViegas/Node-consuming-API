import cache from '../cache.js'
import getWeatherForecast from '../services/openWeatherApi.js'

export default {
    async index(request, response) {
        
    },
    async show(request, response) {
        let citysWeathers = cache.get('citysweathers')

        if (citysWeathers == null) {
            const capitals = [{city:"Porto Velho"}, {city:"bla bla bla"}]
            const data = await getWeatherForecast(capitals)
            cache.set('citysweathers', data)
            citysWeathers = data
        }
        console.log(citysWeathers)
        response.send(citysWeathers)
    }
}