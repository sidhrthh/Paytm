const express = require("express");
const router = express.Router();
const { userSignUpSchema, userSignInSchema, userUpdateSchema } = require("../zodAuthenticate");
const { User, Account} = require("../database/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../authMiddleware");

router.post("/signup", async (req, res) => {
    const { success } = userSignUpSchema.safeParse(req.body);

    if (!success) {
        return res.status(403).json({
            msg: "User add incorrect inputs",
        });
    }

    const existUser = await User.findOne({
        username: req.body.username
    })

    if (existUser) {
        return res.status(403).json({
            msg: "user is already exist"
        })
    }


    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;


    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({ userId }, JWT_SECRET)


    res.status(200).json({
        message: "User created successfully",
        token: token
    })
});

router.post("/signin", async (req, res) => {
    const { success } = userSignInSchema.safeParse(req.body);

    if (!success) {
        return res.status(402).json({
            Msg: "Incorrect inputs"
        })
    }

    const existUser = await User.findOne({
        username: req.body.username
    })

    if (existUser) {
        return res.status(403).json({
            msg: "user is already exist"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })

    const userId = user._id;

    const token = jwt.sign({ userId }, JWT_SECRET)

    res.status(200).json({
        msg: "user signin successfully",
        token: token
    })
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = userUpdateSchema.safeParse(req.body);
    if (!success) {
        return res.status(403).json({
            msg: "Something is wrong with updatation"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body)


})

router.get("/bulk", async (req, res) => {
    const filter = req.body.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;
