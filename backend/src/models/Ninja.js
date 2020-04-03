const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
  thumbnail: String,
  name: String,
  desc: String,
  power: Number,
  intelligence: Number,
  speed: Number,
  taijutsu: Number,
  ninjutsu: Number,
  genjutsu: Number,
  endurance: Number,
  willpower: Number,
  overall: Number,
  health: Number,
  attack: Number
});

module.exports = mongoose.model("Ninja", NinjaSchema);
