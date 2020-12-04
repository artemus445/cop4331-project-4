const mongoose = require("mongoose");
const Conversation = mongoose.model("Conversation");

exports.createConversations = async (req, res) => 
{
  const { username } = req.body;

  const nameRegex = /^[a-zA-Z_0-9]+$/;

  if (!nameRegex.test(username)) throw "Not a valid name.";

  const converationExists = await Conversation.findOne({ username });

  if (converationExists) throw "You cannot talk with this user.";

  const convo = new Conversation({
    username,
    
  });

  await convo.save();

  res.json({message: "Conversation beginning...",
  });
};

exports.getConversations = async (req, res) => {const conversation = await Conversation.find({});
  
    res.json(conversation);
  };
