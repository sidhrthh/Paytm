const zod = require("zod")

const userSignUpSchema = zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})

const userSignInSchema = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

module.exports = {
    userSignUpSchema,
    userSignInSchema
}