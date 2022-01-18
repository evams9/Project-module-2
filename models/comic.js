const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },

    volumeNumber: {
      type: Number,
      required: [true, 'number is required'],
    },

    editorial: {
      type: String,
      required: [true, 'editorial is required'],
    },
    genre: {
      type: String,
      required: [true, 'genre is required'],
    },

    numberPages: {
      type: Number,
      required: [true, 'number pages is required'],
    },

    description: {
      type: String,
      required: [true, 'description pages is required'],
    },
    author: {
      type: String,
      required: [true, 'author is required'],
    },
    opinion: {
      type: String,
      required: [true, 'opinion pages is required'],
    },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    image: { type: String },
  },
  {
    timestamps: true,
  },
);

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
