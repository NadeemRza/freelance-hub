import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import User from "../models/user.model.js";
import Stripe from "stripe";

export const getAllOrders = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.userId);

    const allOrders = await Order.find({
      ...(user.isSeller ? { sellerId: user._id } : { buyerId: user._id }),
      isCompleted: true,
    });

    res.status(200).json(allOrders);
  } catch (error) {
    next(error);
  }
};

export const getIntent = async (req, res, next) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_KEY);

    const gig = await Gig.findById(req.params.id);

    const payment_intent = await stripe.paymentIntents.create({
      amount: gig.price,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.coverImg,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: payment_intent.id,
    });

    await newOrder.save();

    res.status(200).json({
      clientSecret: payment_intent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      { $set: { isCompleted: true } },
      { new: true }
    );
    res.status(200).send("Order has been confirmed!");
  } catch (err) {
    next(err);
  }
};
