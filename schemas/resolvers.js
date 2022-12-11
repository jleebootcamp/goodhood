const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('questions');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('questions');
    },
    questions: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.find(params).sort({ createdAt: -1 });
    },
    question: async (parent, { questionId }) => {
      return User.findOne({ _id: questionId });
    },
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('questions');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuestion: async (parent, { questionText }, context) => {
      if (context.user) {
        const question = await Question.create({
          questionText,
          questionAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { questions: question._id } }
        );

        return question;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addResponse: async (parent, { questionId, responseText }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $addToSet: {
              responses: { responseText, responseAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeQuestion: async (parent, { questionId }, context) => {
      if (context.user) {
        const question = await Question.findOneAndDelete({
          _id: questionId,
          questionAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { questions: question._id } }
        );

        return question;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeResponse: async (parent, { questionId, responseId }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $pull: {
              responses: {
                _id: responseId,
                responseAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
