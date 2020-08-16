import { gql } from 'apollo-server'

// The GraphQL schema
export default gql`
type Query {
  user(id: ID!): User
  currentUser: User!
  game(id: ID!): Game
  roll(equation: String!, verbose: Boolean): Roll!
}

type User {
  id: ID!
  email: String!
  username: String
  ownedGames: [Game!]
}

type Game {
  id: ID!
  owner: User!
  ownerId: ID!
  name: String!
  description: String
  lastGameDate: String
  nextGameDate: String
}

type Mutation {
  register(email: String!, password: String!, username: String): User!
  login(email: String!, password: String!): LoginResponse!
  createGame(ownerId: ID!, name: String!, description: String): Game!
}

type LoginResponse {
  token: String
  user: User
}

type Roll {
  equation: String!
  result: String!
  tokens: [Token!]
}

type Token {
  token: String!
  isRoll: Boolean!
  rollResults: [String!]
}
`