const Heroes = require("../models/heroes.model");

exports.getAllHeroes = (req, res) => {
  Heroes.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getHero = (req, res) => {
  Heroes.findById(req.params.heroId, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createHero = (req, res) => {
  try {
    const HERO = {
      _id: req.body.hero.hero._id,
      id: req.body.hero.hero.id,
      name: req.body.hero.hero.name,
      ranking: req.body.hero.hero.ranking,
      specialty: req.body.hero.hero.specialty,
      rent: req.body.hero.hero.rent,
      hired: req.body.hero.hero.hired,
    };

    const newHero = new Heroes(HERO);
    newHero.save();

    res.status(200).send({ message: "Successfully created new Hero!" });
  } catch (err) {
    res.status(400).send(err);
  } finally {
    res.end();
  }
};

exports.updateHero = (req, res) => {
  Heroes.findOneAndUpdate(
    { _id: req.params.heroId },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

exports.deleteHero = (req, res) => {
  Heroes.deleteOne({ _id: req.params.heroId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ msg: "Deleted hero successfully." });
  });
};
