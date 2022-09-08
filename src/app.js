import Express from 'express'
import routes from './routes.js'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3030

const app = Express()

app.use(routes)

app.listen(PORT, () => console.log(`app is listening in port: ${PORT}`))