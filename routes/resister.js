const express = require("express");
const router = express.Router();
const resisterController = require("../controllers/resisterController")

router.post('/', resisterController.handleNewUsers);

module.exports = router;