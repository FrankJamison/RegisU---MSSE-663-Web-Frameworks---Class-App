require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const mongoose = require("mongoose");

/* routing */
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const heroesRoutes = require("./routes/heroes.routes");

const app = express();
const port = process.env.PORT || 3000;

/* database */
mongoose.Promise = global.Promise;

const MONGOURI = "mongodb+srv://frankjamison:res0@L1969@cluster0.k6zfd.mongodb.net/class-app?retryWrites=true&w=majority";

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DB = mongoose.connection;

DB.on("error", console.error.bind(console, "connection err:"));

DB.once("open", () => {
  console.log("connected to MongoDB");
});

/* middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* route handlers */
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/heroes", heroesRoutes);

/* server listening */
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
