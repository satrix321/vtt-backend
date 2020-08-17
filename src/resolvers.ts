import { Context } from './context'
import rollParser from './rollParser/rollParser'
import { user, currentUser } from './queries/user'
import { game, listOfGames } from './queries/game'
import { register, login, autoLogin } from './mutations/auth'
import { createGame, deleteGame, addPlayerToGame, removePlayerFromGame } from './mutations/game'

export default {
  Query: {
    user,
    currentUser,

    game,
    listOfGames,

    roll: (_: any, { equation, verbose }: { equation: string, verbose: boolean }, ctx: Context) => {
      return rollParser.parse(equation, {
        verbose,
      })
    },
  },
  Mutation: {
    register,
    login,
    autoLogin,

    createGame,
    deleteGame,
    addPlayerToGame,
    removePlayerFromGame
  }
}