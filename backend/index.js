import express from "express";
const app = express();
const port = 3000;

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/user.route.js";
import gigsRoute from "./routes/gig.route.js";
import reviewsRoute from "./routes/review.route.js";
import ordersRoute from "./routes/order.route.js";
import conversationsRoute from "./routes/conversation.route.js";
import messagesRoute from "./routes/message.route.js";

import cors from "cors";

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("DB Disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/gigs", gigsRoute);
app.use("/api/reviews", reviewsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/conversations", conversationsRoute);
app.use("/api/messages", messagesRoute);

//error handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(port, () => {
  connectMongodb();
  console.log(`App listening on port ${port}`);
});
