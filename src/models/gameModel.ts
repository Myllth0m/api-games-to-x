import mongoose, { Document, Schema } from 'mongoose'

export interface IGame extends Document {
    name: string,
    description: string,
    releaseOn: string,
    isSinglePlayer: boolean,
    difficulty: string
}

const gameSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    releaseOn: { type: String, required: true },
    isSinglePlayer: { type: Boolean, required: true },
    difficulty: { type: String, required: true },
})

export default mongoose.model<IGame>('Game', gameSchema)