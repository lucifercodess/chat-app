import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    // sign method takes the user id and a secret key
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, //prevent Xss attack and cross site scripting attacks
    sameSite: "strict", // prevent CSSRF attacks;
  });
};

export default generateTokenAndSetCookie;
