import jwt from "jsonwebtoken"

 const generateToken =(id)=>{
        return jwt.sign({id},"shivani",{
                expiresIn:"2d"
        })
}

export default generateToken