const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:JoHIbjnDVbPOTdtC@cluster0.ophymjp.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true
    } ,
    balance : {
type : Number,
require:true
    }
})

const User = mongoose.model("User" , userSchema)
const Account = mongoose.model("Account" , accountSchema)

module.exports = {
    User,
    Account
}