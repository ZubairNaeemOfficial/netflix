const user=require('../models/user')
const dotenv = require("dotenv");
var CryptoJS = require("crypto-js");

dotenv.config();

 const register=(req,res)=>{
    try {
           
         return user.create({
            name:req.body.name,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
            isAdmin:req.body.isAdmin
          })
          .then((userData) =>
          res.status(201).send({
            success: true,
            message: "User successfully created",
            userData,
          })
        )
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message })
    }
}

const login = async(req,res)=>{
  try {
      const User= await user.findOne({email:req.body.email})
      var bytes  = CryptoJS.AES.decrypt(User.password, process.env.SECRET_KEY);
       var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.email && res.status(401).json('Wrong Password or username');

      res.status(200).json(User)

  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message })
  }
}


 module.exports=register;
 module.exports=login