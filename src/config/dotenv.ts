import dotenv from 'dotenv'

dotenv.config()

export default {
    MONGO_URI: process.env.MONGO_URI || '',
    DATABASE_NAME: process.env.DATABASE_NAME || '',
    PORT: process.env.PORT || 3000
}