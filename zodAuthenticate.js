const zod = require("zod")

const userSigninSchema = zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

module.exports = {
    userSigninSchema
}