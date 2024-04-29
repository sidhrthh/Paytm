// backend/routes/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account")

const router = express.Router();

router.use("/user", userRouter)
router.use("/acoount" , accountRouter) 

module.exports = router;