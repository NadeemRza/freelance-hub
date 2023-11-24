import express from "express";
import {
  getAllOrders,
  getIntent,
  updateOrder,
} from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = express.Router();

//GET ALL
router.get("/:userId", verifyToken, getAllOrders);

//Stripe
router.post("/create-payment-intent/:id", verifyToken, getIntent);

//PUT
router.put("/", verifyToken, updateOrder);

export default router;
