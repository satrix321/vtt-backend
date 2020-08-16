import { Context } from './context'
import rollParser from './rollParser/rollParser'
import { user, currentUser } from './queries/user'
import { game } from './queries/game'
import { register, login } from './mutations/auth'
import { createGame } from './mutations/game'

export default {
  Query: {
    user,
    currentUser,
    game,
    roll: (_: any, { equation, verbose }: { equation: string, verbose: boolean }, ctx: Context) => {
      return rollParser.parse(equation, {
        verbose,
      })
    },
  },
  Mutation: {
    register,
    login,
    createGame,
  }
}