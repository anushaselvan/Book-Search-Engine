const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    authors: [String]!
    description: String
    bookId: String!
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors:[String], description: String!, bookId: String!, image: String, link: String): User
    removeBook(bookId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
