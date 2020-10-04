require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
mongoose.set("useCreateIndex", true);
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 8,
    maxLength: 30,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

/* store the password hashed */
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/* generate auth token */
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

/* get user by email and password */
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  const errorMsg = "Invalid credentials provided";

  if (!user) throw new Error({ error: errorMsg });

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) throw new Error({ error: errorMsg });

  return user;
};

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
