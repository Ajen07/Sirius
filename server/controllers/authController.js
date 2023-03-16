import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";

// REGISTRATION CONTROLLER

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all the credentials");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email Id already exists");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT(user);
  res
    .status(StatusCodes.CREATED)
    .json({ user, token, location: user.location });
};

//LOGIN CONTROLLER

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Please provide valid emailId");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Incorrect Password");
  }
  const token = user.createJWT(user);
  user.password=undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export { register, login };
