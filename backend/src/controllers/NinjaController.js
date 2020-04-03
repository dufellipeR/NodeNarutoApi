const Ninja = require("../models/Ninja");

module.exports = {
  async put(req, res) {
    const { _id } = req.headers;
    const { filename } = req.file;
    const {
      name,
      desc,
      power,
      intelligence,
      speed,
      taijutsu,
      ninjutsu,
      genjutsu,
      endurance,
      willpower
    } = req.body;

    const totoverall =
      parseInt(power) +
      parseInt(intelligence) +
      parseInt(speed) +
      parseInt(taijutsu) +
      parseInt(ninjutsu) +
      parseInt(genjutsu) +
      parseInt(endurance) +
      parseInt(willpower);
    const overall = Math.trunc(totoverall / 8);

    const tothealth = parseInt(power) + parseInt(endurance);
    const health = tothealth * 100;

    const attack = parseInt(taijutsu) + parseInt(ninjutsu) + parseInt(genjutsu);
    const ninja = await Ninja.findByIdAndUpdate(
      { _id },
      {
        thumbnail: filename,
        name,
        desc,
        power,
        intelligence,
        speed,
        taijutsu,
        ninjutsu,
        genjutsu,
        endurance,
        willpower,
        overall,
        health,
        attack
      }
    );
    return res.json({ messsage: "success" });
  },

  async delete(req, res) {
    const { _id } = req.headers;

    const ninja = await Ninja.findOneAndDelete({ _id });
    return res.json({ messsage: "success" });
  },

  async index(req, res) {
    const ninjas = await Ninja.find();
    return res.json(ninjas);
  },

  async store(req, res) {
    const { filename } = req.file;
    const {
      name,
      desc,
      power,
      intelligence,
      speed,
      taijutsu,
      ninjutsu,
      genjutsu,
      endurance,
      willpower
    } = req.body;

    const totoverall =
      parseInt(power) +
      parseInt(intelligence) +
      parseInt(speed) +
      parseInt(taijutsu) +
      parseInt(ninjutsu) +
      parseInt(genjutsu) +
      parseInt(endurance) +
      parseInt(willpower);
    const overall = Math.trunc(totoverall / 8);

    const tothealth = parseInt(power) + parseInt(endurance);
    const health = tothealth * 100;

    const attack = parseInt(taijutsu) + parseInt(ninjutsu) + parseInt(genjutsu);

    const ninja = await Ninja.create({
      thumbnail: filename,
      name,
      desc,
      power,
      intelligence,
      speed,
      taijutsu,
      ninjutsu,
      genjutsu,
      endurance,
      willpower,
      overall,
      health,
      attack
    });

    return res.json(ninja);
  }
};
