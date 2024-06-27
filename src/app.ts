import express, { Application } from 'express'
import connectDb from './config/database'
import gameRoutes from './routes/gameRoutes'

const app: Application = express()

connectDb()

app.use(express.json())

// app.use('/', (req, res) => {
//   res.status(200).json({
//     message:
//       'API WORKING!! if u have any problem, pls send me on https://github.com/Myllth0m/api-games-to-x/issues',
//   })
// })

app.use('/api/games', gameRoutes)

export default app
