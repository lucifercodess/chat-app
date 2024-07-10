import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // id of the sender
      ref: "User", // ref to the User model
      required: true,
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId, // id of the reciever
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // created at and updated at fields present in  our database

const Message = mongoose.model("Message", messageSchema);

export default Message;
