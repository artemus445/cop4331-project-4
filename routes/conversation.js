const route = require("express").Router();
const { catchErrors } = require("../handles/errors");
const convoControl = require("../controls/convoControl");
const auth = require("../middlewares/auth");


route.get("/", auth, catchErrors(convoControl.getConversations));

route.post("/", auth, catchErrors(convoControl.createConversations));

module.exports = route;