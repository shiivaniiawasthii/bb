const express = require("express") 
const router = express.Router()
const { loginUser, registerUser } = require("../Controller/userController.js") 



router.route('/').post(registerUser)
router.post("/login",loginUser)


export default router