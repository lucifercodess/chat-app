import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
          // id of the logged in user
        const filteredUser = await User.find({_id : {$ne: loggedInUserId}}).select("-password"); // this means that find all the id in the database expect the userid which is currently logged in 
        // because we don't want the user to see themself in the side bar 
        // $ ne stands for no except 
        res.status(200).json({message: filteredUser});
    } catch (error) {
        console.log("error in user controller sidebar ", error)
        res.status(500).json({error: "internal server error"})
    }
}