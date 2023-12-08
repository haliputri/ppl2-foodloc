import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant', // Reference to the Restaurant model
      required: true,
    },
    review_rating: {
      type: Number,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    review_text: {
      type: String,
      required: true,
    },
    review_image: {
      type: String, // You might want to use a storage service and store the URL here
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    review_datetime: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
