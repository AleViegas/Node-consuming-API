import * as dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.API_KEY
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

// const res = await fetch('https://dog.ceo/api/breeds/list/all');
// const json = await res.json();
// console.log(res)
// console.log(json);


const capitals = [{city:"Porto Velho"}, {city:"bla bla bla"}]

const responses = await Promise.all(capitals.map(async (capital) => {

    const { city } = capital

    const requestUrl = `${BASE_URL}?appid=${API_KEY}&q=${city}`
    const response = await fetch(requestUrl)

    // try {
    //     response = await fetch(requestUrl)        
    // } catch (error) {
    //     console.log(error)
    //     return
    // }
    
    const data = await response.json()
    
    if (response.status !== 200) {
        return {city, message:data.message}
    }

    return {city, message:data.main}
}))

console.log(responses)