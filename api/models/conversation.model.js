import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      default: false,
      required: true,
    },
    readByBuyer: {
      type: Boolean,
      default: false,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationSchema);
