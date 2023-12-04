import Conversation from "../models/conversation.model.js";
import createError from "../utils/createError.js";

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const savedConversation = await newConversation.save();

    res.status(201).json(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );
    res.status(200).json(updatedConversation);
  } catch (err) {
    next(err);
  }
};

export const deleteConversations = async (req, res, next) => {
  try {
    await Conversation.findByIdAndDelete(req.params.id);
    res.status(201).send("Conversations has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });

    if (!conversation) return next(createError(404, "No conversation found!"));

    res.status(200).json(conversation);
  } catch (err) {
    next(err);
  }
};

export const getAllConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });
    res.status(200).json(conversations);
  } catch (err) {
    next(err);
  }
};