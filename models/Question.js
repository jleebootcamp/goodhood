const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema({
  questionText: {
    type: String,
    required: 'You need to leave a question!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  questionAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  responses: [
    {
      responseText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      responseAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Question = model('Question', questionSchema);

module.exports = Question;
