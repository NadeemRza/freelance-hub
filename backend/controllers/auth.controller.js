import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    let hash = bcrypt.hashSync(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    // if (!isPasswordCorrect)
    //   return next(createError(400, "Wrong password or username!"));
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT
    );

    // const { password, isAdmin, ...otherDetails } = user._doc;
    // res
    //   .cookie("access_token", token, { httpOnly: true })
    //   .status(200)
    //   .json({ details: { ...otherDetails }, isAdmin });

    const { password, ...info } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out!");
};
