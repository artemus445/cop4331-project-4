require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.db,
{
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("There has been an error: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("Database connected: ");
});

//Bring in the models
require("./models/user.model");
require("./models/conversation.model");
require("./models/message.model");

const app = require("./app");


const server= app.listen(8000, () => {
  console.log("Listening on port 8000");
});


const io = require("socket.io")(server);
const jwt = require("jwt-then");





io.use(async (socket, next) => {
    try {
      const token = socket.handshake.query.token;
      const payload = await jwt.verify(token, process.env.CRYPT);
      socket.userId = payload.id;
      next();
    } catch (err) {}
  });

  io.on("connection", (socket) => {
    console.log("Connected: " + socket.userId);
  
    socket.on("disconnect", () => {
      console.log("Disconnected: " + socket.userId);
    });

});

