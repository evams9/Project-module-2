const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'title is required'],
    },

    volumeNumber: {
      type: Number,
      trim: true,
      required: [true, 'number is required'],
    },

    editorial: {
      type: String,
      trim: true,
      required: [true, 'editorial is required'],
    },

    genre: {
      type: String,
      trim: true,
      required: [true, 'genre is required'],
    },

    numberPages: {
      type: Number,
      trim: true,
      required: [true, 'number pages is required'],
    },

    description: {
      type: String,
      trim: true,
      required: [true, 'description pages is required'],
    },

    opinion: {
      type: String,
      trim: true,
      required: [true, 'opinion pages is required'],
    },

  },
  {
    timestamps: true,
  },
);

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
