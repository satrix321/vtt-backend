import { ApolloServer } from 'apollo-server'
import { createContext, destroyContext } from './context'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

async function main() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
  })

  server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await destroyContext()
  })