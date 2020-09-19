const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const heroes = require("./routes/heroes");
const InitiateMongoServer = require("./config/db");
var cors = require('cors');


// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/api/", user);
app.use("/api/", heroes);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
