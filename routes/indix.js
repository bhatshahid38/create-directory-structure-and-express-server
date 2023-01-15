const express = require("express");
const router  = express.Router();
module.exports = router
const homecontroller = require('../controllers/home_controller')
router.get('/',homecontroller.home)

