import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDb from "./db/connectToMMongoDb.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    connectToMongoDb();
  console.log(`server is running on port ${PORT}`);
});
