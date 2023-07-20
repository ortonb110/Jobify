import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6,
    trim: true,
    select: false
  },
  lastName: {
    type: String,
    minlength: 3, 
    maxlength: 20,
    trim: true,
    default: "lastname",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

UserScheme.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password)
})


UserScheme.methods.createJWT = function() {
  return jwt.sign({userID: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
}

UserScheme.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}


export default mongoose.model("User", UserScheme);
