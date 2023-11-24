import Review from "../models/review.model.js";
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review)
      return next(createError(403, "You have already reviewed this gig!"));

    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).json(savedReview);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (req.userId !== review.userId) {
      return next(createError(403, "You can delete only your reviews!"));
    }

    const gig = await Gig.findOne(review.gigId);

    if (
      (gig.totalStars - review.star) / (gig.starNumber - 1) < 0 ||
      gig.totalStars - review.star < 0 ||
      gig.starNumber - 1 < 0
    ) {
      await Review.findByIdAndDelete(req.params.id);
      return res.status(200).send("Review has been deleted!");
    }

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: -req.body.star, starNumber: -1 },
    });

    await Review.findByIdAndDelete(req.params.id);
    return res.status(201).send("Review has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getAllReviews = async (req, res, next) => {
  try {
    const allReviews = await Review.find({ gigId: req.params.id });
    res.status(200).json(allReviews);
  } catch (error) {
    next(error);
  }
};
