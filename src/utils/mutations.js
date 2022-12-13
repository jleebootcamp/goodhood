import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($questionText: String!) {
    addQuestion(questionText: $questionText) {
      _id
      questionText
      questionAuthor
      createdAt
      responses {
        _id
        responseText
      }
    }
  }
`;

export const ADD_RESPONSE = gql`
  mutation addResponse($questionId: ID!, $responseText: String!) {
    addResponse(questionId: $questionId, responseText: $responseText) {
      _id
      questionText
      questionAuthor
      createdAt
      responses {
        _id
        responseText
        createdAt
      }
    }
  }
`;