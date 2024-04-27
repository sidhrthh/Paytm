const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:JoHIbjnDVbPOTdtC@cluster0.ophymjp.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

const User = mongoose.model("User" , userSchema)

module.exports = {
    User
}