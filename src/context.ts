import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient,
}

export function createContext(): Context {
  return { prisma }
}

export function destroyContext(): Promise<any> {
  return prisma.disconnect()
}