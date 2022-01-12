const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'title is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
