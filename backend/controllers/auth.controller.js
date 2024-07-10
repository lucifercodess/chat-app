import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body; // getting the params from the user

    if (password != confirmPassword) {
      return res.status(400).json({ error: "passwords do not match" }); // check if password and comfirm password match
    }
    const user = await User.findOne({ username }); // check it username os available or not
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    const salt = await bcrypt.genSalt(10); // generate the salt
    const hashedPassword = await bcrypt.hash(password, salt); // hashing the password
    const boyProifilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`; // api for profile icon
    const girlProifilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      // saving the user by using new User
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProifilePic : girlProifilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res); // generate token
      res.cookie("jstToken", " ", { maxAge: 0 });
      await newUser.save(); // save and initiates the user
      res.status(201).json({
        // displaying the fields to the user
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        message: "successfully created the user",
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    // if there is an internal error
    console.log("error in signup controller");
    res.status(500).json({ error: "internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.cookie("jstToken", " ", { maxAge: 0 });

    res.status(201).json({
      // displaying the fields to the user
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in the login controller"); // if there is an error in the login controller
    res.status(500).json({ error: "internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", " ", { maxAge: 0 }); // removes the token from the cookie
    res.cookie("jstToken", " ", { maxAge: 0 }); // done it one more time because there was already one jstToken named token present in the cookie

    res.status(201).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in the login controller"); // if there is an error in the logout controller
    res.status(500).json({ error: "internal server error" });
  }
};

// controller where the most of the logic is written
