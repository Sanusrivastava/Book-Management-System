const mongoose = require('mongoose');
// const bookModel = require('./bookModel');

const ObjectId = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema({
  bookId: {
    type: ObjectId,
    ref: "book",
    required: true
  },
  reviewedBy: {
    type: String,
    required: true,
    default: 'Guest',
    trim: true
  },
  reviewedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  review: {
    type: String,
    trim: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Review', reviewSchema);