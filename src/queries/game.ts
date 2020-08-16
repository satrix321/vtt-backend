import { Context } from '../context'

export const game = async (_: any, { id }: any, ctx: Context) => {
  return await ctx.prisma.game.findOne({ where: { id: Number(id) } })
}