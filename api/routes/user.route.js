import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyToken, updateUser);

//DELETE
router.delete("/:id", verifyToken, deleteUser);

//GET
router.get("/:id", verifyToken, getUser);

export default router;
