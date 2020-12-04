const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new mongoose.Schema(
    {
    conversation: 
    {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Start a conversation',
        ref: 'Conversation',
    },
    user:
     {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Start a conversation',
        ref: 'User',
    },
   message:
    {
        type: String,
        required: 'Enter Message',
    },
 

},
{timestamps: true}
);


module.exports =  mongoose.model('Message', MessageSchema);