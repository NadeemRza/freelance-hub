import express from "express";
import {
  getAllConversations,
  createConversation,
  getConversation,
  updateConversation,
  deleteConversations,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = express.Router();

//ADD
router.post("/", verifyToken, createConversation);

//UPDATE
router.put("/:id", verifyToken, updateConversation);

//DELETE
router.delete("/:id", verifyToken, deleteConversations);

//GET
router.get("/:id", verifyToken, getConversation);

//GET ALL
router.get("/", verifyToken, getAllConversations);

export default router;
