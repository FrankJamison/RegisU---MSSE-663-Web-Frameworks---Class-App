const {
  getAllHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero,
} = require("../controllers/heroes.controller");

const express = require("express");
const canAccess = require("../middleware/auth.middleware");

const heroesRoutes = express.Router();

heroesRoutes
  //.post("/", canAccess, createHero)
  .post("/", createHero)
  .get("/:heroId", getHero)
  .get("/", getAllHeroes)
  .post("/:heroId", updateHero)
  .delete("/:heroId", deleteHero);

module.exports = heroesRoutes;
