const express = require("express") ;
const dotenv = require("dotenv") 
const cors = require("cors") 
const connectDb = require("./Config/db.js") 
const userRoutes = require("./Routes/userRoute.js") 

dotenv.config()

connectDb()

const app = express()


app.use(cors())
app.use(express.json())







app.get("/",(req,res)=>{
        res.send("hey")
})

/
app.use("/users",userRoutes)





const PORT =  5000





app.listen(PORT,
        console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`))

