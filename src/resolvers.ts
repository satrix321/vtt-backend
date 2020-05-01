import { Context } from './context'

export default {
  Query: {
    user: async (_: any, { id }: any, ctx: Context) => {
      return await ctx.prisma.user.findOne({ where: { id: Number(id) } })
    }
  }
}