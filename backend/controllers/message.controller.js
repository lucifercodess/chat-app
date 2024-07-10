import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  // we will use req.params to take the user id from the paramter and later send msg to the person with that id
  try {
    const { message } = req.body; // message
    const { id: recieverId } = req.params; //reciever id
    const senderId = req.user._id; //senderid

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] }, // this will first check if there is a conversation between the sender and the reciever
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId: senderId,
      recieverId: recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();  // both these will take time
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]); // this will run in parallel;
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in the sendMessage controller", error);
    res.status(500).json({ error: "internal sever error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const {id: userToChatId} = req.params; // user to chat id means that this is the id with which we are going to chat
    const senderId = req.user._id; // we got this from the protect route function

    const conversation = await Conversation.findOne({
        participants : {$all: [senderId, userToChatId]}
    }).populate("messages");  // populates the messages array and gives one message at a time and one by one
        // NOT REFERENCE BUT ACTUAL MESSAGES
    if(!conversation){
        res.status(400).json([]);
    }
    const messages =  conversation.messages
    res.status(201).json({
        message: messages
    })
  } catch (error) {
    console.log("error in the sendMessage controller", error);
    res.status(500).json({ error: "internal sever error" });
  }
};
