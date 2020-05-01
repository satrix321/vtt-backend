import { gql } from 'apollo-server'

// The GraphQL schema
export default gql`
type Query {
  user(id: ID): User
}

type User {
  id: Int
  email: String
  name: String
}
`