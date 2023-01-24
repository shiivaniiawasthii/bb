import asyncHandler from "express-async-handler";
import  generateToken from "../utils/generateToken.js" ;
import User from "../Models/userModel.js"

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists..");
  }

  const user = await User.create({ name, email, password });
  console.log(email)
     console.log(email.includes("@masaischool@gmail.com"))
  if (user){
    
    if(email.includes("@masaischool@gmail.com")){
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: true,
        token: generateToken(user._id),
      });
    }
    else{
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: false,
        token: generateToken(user._id),
      });
    }}
    else {
    res.status(400);
    throw new Error(`Invalid user data`);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Invalid Credentials");
  }

  res.send({ email, password });
});