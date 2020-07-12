import { Context } from './context'
import rollParser from './rollParser/rollParser'
import { register, login } from './resolvers/auth'

export default {
  Query: {
    user: async (_: any, { id }: any, ctx: Context) => {
      return await ctx.prisma.user.findOne({ where: { id: Number(id) } })
    },
    currentUser: async (_: any, _args: any, ctx: Context) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      return ctx.prisma.user.findOne({ where: {
        id: ctx.user.id,
      }})
    },
    roll: (_: any, { equation, verbose }: { equation: string, verbose: boolean }, ctx: Context) => {
      return rollParser.parse(equation, {
        verbose,
      })
    },
  },
  Mutation: {
    register,
    login,
  }
}