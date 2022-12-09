const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    questions: [Question]!
  }

  type Question {
    _id: ID
    questionText: String
    questionAuthor: String
    createdAt: String
    responses: [Response]!
  }

  type Response {
    _id: ID
    responseText: String
    responseAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    questions(username: String): [Question]
    question(questionId: ID!): Question
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuestion(questionText: String!): Question
    addResponse(questionId: ID!, responseText: String!): Question
    removeQuestion(questionId: ID!): Question
    removeResponse(questionId: ID!, responseId: ID!): Question
  }
`;

module.exports = typeDefs;