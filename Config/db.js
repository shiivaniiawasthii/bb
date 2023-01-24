import mongoose from"mongoose"

mongoose.set('strictQuery', false);
const connectDb =async()=>{
        try{
                const conn = await mongoose.connect("mongodb+srv://shivani:shivani@cluster0.u6r4xh0.mongodb.net/mc13?retryWrites=true&w=majority",{
                        
                      
                })
               
                console.log(`MongoDB connected : ${conn.connection.host}`)
        }
catch(err){
        console.error(`Error: ${err.message}`)
        process.exit(1)
}
}
export default connectDb