import mongoose from 'mongoose'
import dotenv from './dotenv'

const connectDb = async () => {
    try {
        await mongoose.connect(dotenv.MONGO_URI, {
            dbName: dotenv.DATABASE_NAME
        })
    } catch (err: any) {
        console.error(err.message)
        process.exit(1)
    }
}

export default connectDb