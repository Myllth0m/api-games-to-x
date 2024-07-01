import cors from 'cors';
import express, { Application } from 'express';
import connectDb from './config/database';
import gameRoutes from './routes/gameRoutes';

const app: Application = express()

connectDb()

app.use(cors())
app.use(express.json())
app.use('/api/games', gameRoutes)

export default app