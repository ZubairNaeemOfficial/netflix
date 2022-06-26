const express = require("express");
router=express.Router();
const User=require('../controller /auth');



router.post('/register',User)
router.post('/login',User)


module.exports = router;