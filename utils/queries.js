import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      questions {
        _id
        questionText
        createdAt
      }
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
      _id
      questionText
      questionAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_QUESTION = gql`
  query getSingleQuestion($questionId: ID!) {
    question(questionId: $questionId) {
      _id
      questionText
      questionAuthor
      createdAt
      responses {
        _id
        responseText
        responseAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      questions {
        _id
        questionText
        questionAuthor
        createdAt
      }
    }
  }
`;
