import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
// import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// //UPDATE
// router.put("/:id", verifyUser, updateUser);

//DELETE
// router.delete("/:id", verifyAdmin, deleteUser);
router.delete("/:id", verifyToken, deleteUser);

//GET
router.get("/:id", verifyToken, getUser);

// //GET ALL
// router.get("/", verifyAdmin, getAllUser);

export default router;
