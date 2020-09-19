//FILENAME : Hero.js

const { Int32 } = require("bson");
const { truncate } = require("fs");
const mongoose = require("mongoose");

const HeroesSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  ranking: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  }
});

// export model user with UserSchema
module.exports = mongoose.model("heroes", HeroesSchema);
