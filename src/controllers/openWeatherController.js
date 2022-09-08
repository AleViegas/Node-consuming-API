import cache from '../cache.js'
import getWeatherForecast from '../services/openWeatherApi.js'

export default {
    async show(request, response) {
        let citysWeathers = cache.get('citysweathers')

        if (citysWeathers == null) {
            const capitals = [
{city:"Rio Branco"}, {city:"Maceió"}, {city:"Macapá"}, {city:"Manaus"}, {city:"Salvador"}, {city:"Fortaleza"}, {city:"Brasília"}, {city:"Vitória"}, {city:"Goiânia"}, {city:"São Luís"}, {city:"Cuiabá"}, {city:"Campo Grande"}, {city:"Belo Horizonte"}, {city:"Belém"}, {city:"João Pessoa"}, {city:"Curitiba"}, {city:"Recife"}, {city:"Teresina"}, {city:"Rio de Janeiro"}, {city:"Natal"}, {city:"Porto Alegre"}, {city:"Porto Velho"}, {city:"Boa Vista"}, {city:"Florianópolis"}, {city:"São Paulo"}, {city:"Aracaju"}, {city:"Palmas"}]
            const data = await getWeatherForecast(capitals)
            cache.set('citysweathers', data)
            citysWeathers = data
        }
        
        response.send(citysWeathers)
    }
}