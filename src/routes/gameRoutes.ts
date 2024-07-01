import { Router } from 'express'
import {
    createGame,
    deleteGame,
    getGame,
    getGames,
    updateGame
} from '../controller/gameController'

const router: Router = Router()

router.post('/', createGame)
router.get('/', getGames)
router.get('/:id', getGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

export default router