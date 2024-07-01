import { Request, Response } from 'express'
import Game, { IGame } from '../models/gameModel'



export const createGame = async (
    req: Request,
    res: Response
): Promise<void> => {
    const {
        name,
        description,
        releaseOn,
        isSinglePlayer,
        difficulty
    } = req.body

    try {
        const game: IGame = new Game({
            name,
            description,
            releaseOn,
            isSinglePlayer,
            difficulty
        })

        await game.save()

        res.status(201).json(game)
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

export const getGames = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const games: IGame[] = await Game.find()

        res.status(200).json(games)
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

export const getGame = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const game: IGame | null = await Game.findById(req.params.id)

        if (game) {
            res.status(200).json(game)
        } else {
            res.status(404).json({ message: 'Game not found' })
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

export const updateGame = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const game: IGame | null = await Game.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (game) {
            res.status(200).json(game)
        } else {
            res.status(404).json({ message: 'Game not found' })
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}

export const deleteGame = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const game: IGame | null = await Game.findByIdAndDelete(req.params.id)

        if (game) {
            res.status(200).json({ message: 'Game deleted' })
        } else {
            res.status(404).json({ message: 'Game not found' })
        }
    } catch (err: any) {
        res.status(500).json({ message: err.message })
    }
}