import { gql } from 'apollo-server'

// The GraphQL schema
export default gql`
type Query {
  user(id: ID!): User
  currentUser: User!
}

type User {
  id: ID!
  email: String!
  username: String
}

type Mutation {
  register(email: String!, password: String!): User!
  login(email: String!, password: String!): LoginResponse!
}

type LoginResponse {
  token: String
  user: User
}
`