const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const NinjaController = require("./controllers/NinjaController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

routes.post("/ninjas", upload.single("thumbnail"), NinjaController.store);
routes.get("/ninjas", NinjaController.index);
routes.delete("/ninjas", NinjaController.delete);
routes.put("/ninjas", upload.single("thumbnail"), NinjaController.put);

module.exports = routes;
