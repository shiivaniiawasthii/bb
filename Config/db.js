const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
const connectDb =async()=>{
        try{
                const conn = await mongoose.connect(process.env.URL,{
                        
                      
                })
               
                console.log(`MongoDB connected : ${conn.connection.host}`)
        }
catch(err){
        console.error(`Error: ${err.message}`)
        process.exit(1)
}
}
export default connectDb