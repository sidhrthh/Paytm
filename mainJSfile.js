const express = require("express")
const app = express();
const PORT = 3000 ;
const cors = require("cors")
const mainRouter = require("./router/index")


app.use(cors())
app.use(express.json())


app.use("/api/v1" , mainRouter)


app.listen(PORT , ()=> {
    console.log(`Server is running in the ${PORT}`)
})


