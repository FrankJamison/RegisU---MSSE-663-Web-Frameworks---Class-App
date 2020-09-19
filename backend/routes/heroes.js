// Filename : user.js

const express = require("express");
// const { check, validationResult} = require("express-validator/check");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();

const Heroes = require("../model/Heroes");

/**
 * @method - GET
 * @description - Get Heroes
 * @param - /auth/me
 */


router.get("/heroes", async (req, res) => {
    try {
      const heroes = await Heroes.find();
      res.json(heroes);
    } catch (e) {
      res.send({ message: "Error in Fetching heroes" });
    }
  });

module.exports = router;