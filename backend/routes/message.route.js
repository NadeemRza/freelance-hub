import express from "express";
import {
  getAllMessages,
  createMessage,
} from "../controllers/message.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = express.Router();

//ADD
router.post("/", verifyToken, createMessage);

//GET ALL
router.get("/:id", getAllMessages);

export default router;
