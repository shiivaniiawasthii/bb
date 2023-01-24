import express from "express" ;
import dotenv from "dotenv" 
import cors from "cors"
import connectDb from "./Config/db.js"
import userRoutes from "./Routes/userRoute.js"

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

