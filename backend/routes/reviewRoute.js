import express from 'express';
import reviewModel from '../models/reviewModel.js';
import mongoose from 'mongoose';

const reviewRouter = express.Router();

// Route untuk menambahkan review baru
reviewRouter.post('/', async (req, res) => {
    try {
      const {
        restaurantName,
        restaurantId,
        rating,
        authorName,
        content,
        image,
        authorId
      } = req.body;
  
      const newReview = new reviewModel({
        restaurant_name: restaurantName,
        restaurant_id : restaurantId,
        review_rating: rating,
        author_name: authorName,
        review_text: content,
        review_image: image,
        author_id: authorId
      });
  
      const savedReview = await newReview.save();
  
      res.status(201).json({
        message: 'Review added successfully',
        data: savedReview,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Route untuk mendapatkan semua review
reviewRouter.get('/', async (req, res) => {
  try {
    const reviews = await reviewModel.find({});
    res.status(200).json({
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route untuk mendapatkan review berdasarkan ID
reviewRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    const review = await reviewModel.findById(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({
      data: review,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route untuk mendapatkan review berdasarkan user ID
reviewRouter.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    const reviews = await reviewModel.find({ author_id: new mongoose.Types.ObjectId(userId) });

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for the user' });
    }

    res.status(200).json({
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route untuk mendapatkan review berdasarkan ID restoran
reviewRouter.get('/restaurant/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    const reviews = await reviewModel.find({ restaurant_id: restaurantId }).sort({ createdAt: 'desc' });

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for the restaurant' });
    }

    res.status(200).json({
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route untuk mendapatkan rata-rata review_rating berdasarkan ID restoran
reviewRouter.get('/average-rating/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ message: 'Invalid ObjectId format' });
    }

    const averageRating = await reviewModel.aggregate([
      {
        $match: { restaurant_id: new mongoose.Types.ObjectId(restaurantId) }
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: '$review_rating' }
        }
      },
      {
        $project: {
          averageRating: { $round: ['$averageRating', 2] }
        }
      }
    ]);

    if (!averageRating.length) {
      return res.status(404).json({ message: 'No reviews found for the restaurant' });
    }

    res.status(200).json({
      averageRating: averageRating[0].averageRating,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


export default reviewRouter;