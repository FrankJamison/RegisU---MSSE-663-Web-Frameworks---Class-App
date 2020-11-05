const mongoose = require("mongoose");

const heroesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
  },

  imgURLs: {
    type: [{ type: String }],
  },
});

const Heroes = mongoose.model("Heroes", heroesSchema);

module.exports = Heroes;
