import { dbModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  if (!req.body) {
    return res.status(500).json({
      message: "Please enter the data to register",
    });
  }

  const data = await dbModel.find();

  if (data.username || data.email) {
    return res.status(409).json({
      message:
        "User already exist please go to the login page or create with other username and email",
    });
  }

  const { username, email, password } = req.body;

  const createUser = await dbModel.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    message: "Data is created successfully",
    createUser,
  });
};

export const getUser = async (req, res) => {
  const data = await dbModel.find();
  console.log(data);

  if (data.length <= 0) {
    return res.status(404).json({
      message: "Not found the data because there is no one even register yet",
    });
  } else {
    return res.status(200).json({
      message: "Fetched the data successfully",
      data,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // input feild is empty ?
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const user = await dbModel.findOne({ email });

    // user exist ?
    if (!user) {
      return res.status(400).json({
        messagee: "User not found",
      });
    }

    // password is correct or not?
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
            message: "Server error"
        });
  }
};
