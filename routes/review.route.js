import express from "express";
import {
  deleteReview,
  getAllReviews,
  createReview,
} from "../controllers/review.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = express.Router();

//ADD
router.post("/", verifyToken, createReview);

//DELETE
router.delete("/:id", verifyToken, deleteReview);

//GET ALL
router.get("/:id", getAllReviews);

export default router;
