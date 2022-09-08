import * as dotenv from 'dotenv'

dotenv.config()

export default async function getWeatherForecast(capitals) {
    const API_KEY_OPEN_WEATHER = process.env.API_KEY_OPEN_WEATHER
    const BASE_URL_OPEN_WEATHER = "http://api.openweathermap.org/data/2.5/weather"
    
    const data = await Promise.all(capitals.map(async (capital) => {
    
        const { city } = capital

        const requestUrl = `${BASE_URL_OPEN_WEATHER}?appid=${API_KEY_OPEN_WEATHER}&q=${city}`

        const response = await fetch(requestUrl)
        
        const forecast = await response.json()
        
        if (response.status !== 200) {
            return {city, message:forecast.message}
        }
        
        return {city, forecast:forecast.weather[0].description , data:forecast.main}
    }))

    return data
}