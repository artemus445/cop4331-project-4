const route = require("express").Router();
const { catchErrors } = require("../handles/errors");
const userControl = require("../controls/userControl");

route.post("/login", catchErrors(userControl.login));

route.post("/register", catchErrors(userControl.register));

module.exports = route;