const mongoose = require('mongoose');



const ConvoSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: "Enter user name please!",
      },
},
{timestamps: true}
);


module.exports =  mongoose.model('Conversation', ConvoSchema);