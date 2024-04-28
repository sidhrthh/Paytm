const express = require("express");
const router = express.Router();
const { userSigninSchema } = require("../zodAuthenticate");
const { User } = require("../database/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
  const { success } = userSigninSchema.safeParse(req.body);

  if (!success) {
   return res.status(403).json({
      msg: "User add incorrect inputs",
    });
  }

  const existUser = await User.findOne({
    username:req.body.username
  })

  if(existUser) {
     return res.status(403).json({
        msg:"user is already exist"
    })
  }


  const user = await User.create({
    username:req.body.username,
    password:req.body.password,
    firstName:req.body.firstName,
    lastName:req.body.lastName,
  })

  const userId = user._id;
  const token = jwt.sign({userId} , JWT_SECRET) 


  res.status(200).json({
	message: "User created successfully",
	token : token
  })
});

module.exports = router;
