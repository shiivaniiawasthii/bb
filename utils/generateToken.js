const jwt =require("jsonwebtoken") 

export const generateToken =(id)=>{
        return jwt.sign({id},"shivani",{
                expiresIn:"2d"
        })
}