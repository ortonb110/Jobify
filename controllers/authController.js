import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticated } from "../Errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values!");
  }
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError(`${email} already in use!`);
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticated("Invalid Credentials");
  }
  const isPassword = await user.comparePassword(password);
  if (!isPassword) {
    throw new UnAuthenticated("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res
    .status(StatusCodes.OK)
    .json({ user: user, token: token, location: user.location});
};

const updateUser = async (req, res) => {
  const {email, name, lastName, location} = req.body;
  
  if(!name || !email || !location || !lastName ) {
    throw new BadRequestError('Please provide all values'); 
  } 
  const user = await User.findOne({_id:req.user.userId});
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  await user.save();
  const token = user.createJWT()
  res
    .status(StatusCodes.OK)
    .json({ user: user, token: token, location: user.location});
};

export { register, login, updateUser };
