import { Context } from '../context'

export const createGame = async (_: any, { ownerId, name, description }: any,  ctx: Context) => {
  const user = await ctx.prisma.user.findOne({ where: { id: Number(ownerId) } })
  if (!user) {
    throw new Error('User with the specified id doesn\'t exit, can\'t create a new game')
  }

  const game = await ctx.prisma.game.create({
    data: {
      name,
      description,
      owner: {
        connect: { id: Number(ownerId) }
      },
    }
  })

  return game
}