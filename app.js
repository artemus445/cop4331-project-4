const express = require("express");

const app = express();

app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const errors = require("./handles/errors");
app.use("/user", require("./routes/user"));
app.use("/conversation", require("./routes/conversation"));




app.use(errors.notFound);
app.use(errors.mongoseErrors);
if (process.env.ENV === "BASE") 
{
  app.use(errors.developmentErrors);
} else
{
  app.use(errors.productionErrors);
}

module.exports = app;