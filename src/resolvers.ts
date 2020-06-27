import { Context } from './context'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import rollParser from './rollParser/rollParser'

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
    register: async (_: any, { email, password, username }: any, ctx: Context) => {
      if (await ctx.prisma.user.findOne({ where: { email } })) {
        throw new Error('Email already in use')
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await ctx.prisma.user.create({ data: {
        email,
        password: hashedPassword,
        username,
      }})

      return user
    },
    login: async (_: any, { email, password }: any, ctx: Context) => {
      const user = await ctx.prisma.user.findOne({ where: {
        email
      }})

      if (!user) {
        throw new Error('Invalid Login')
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.email,
        },
        'my-secret-from-env-file-in-prod',
        {
          expiresIn: '30d',
        },
      )

      return {
        token,
        user,
      }
    },
  }
}