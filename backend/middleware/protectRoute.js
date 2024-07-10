import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //getting the token from the cookie
    if (!token) {
      res.status(400).json({ error: "unauthorized no token provided" }); // if not token is provided
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoding or verifying the token
    if (!decoded) {
      res.status(400).json({ error: "wrong token provided" }); // incase  of wrong token
    }
    const user = await User.findById(decoded.userId).select("-password"); // finds user by its user id

    if (!user) {
      res.status(400).json({ error: "user not found" }); // if user not found
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectRoute Middleware", error); // internal server error when we made the mistake
    res.status(500).json({ error: "internal server error" });
  }
};

export default protectRoute;
