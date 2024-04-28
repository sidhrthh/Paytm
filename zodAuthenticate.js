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

const userUpdateSchema = zod.object({
    username:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})

module.exports = {
    userSignUpSchema,
    userSignInSchema,
    userUpdateSchema
}