import { gql } from 'apollo-server'

// The GraphQL schema
export default gql`
type Query {
  user(id: ID!): User
  currentUser: User!
  roll(equation: String!, verbose: Boolean): Roll!
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

type Roll {
  result: String!
  rolledEquation: String
}
`