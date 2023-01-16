const express = require("express");
const router = express.Router();
module.exports = router;
const users = require("../controllers/user_controller");
router.get("/profile", users.profile);




