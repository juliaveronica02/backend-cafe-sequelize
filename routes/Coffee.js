const express = require("express");
const router = express.Router();
const coffeController = require("../controllers/Coffee");

router.get("/show", coffeController.getData);
router.post("/create", coffeController.createData);

module.exports = router;
