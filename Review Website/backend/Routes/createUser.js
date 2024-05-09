import express, { json } from 'express';
const router = express.Router()
import  { body, validationResult } from 'express-validator';
import  user from '../models/signup.js'

import  bcrypt from "bcryptjs"
import  jwt from "jsonwebtoken"
const jwtSecret = "MyNamensusd$jasjskjhas&hasajslkkas"

router.post('/createuser', [
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({ min: 3 }),
    body('name').isLength({ min: 3 })
],async (req,res)=>{


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);

     try{
        await user.create({
            name:req.body.name,
            email:req.body.email,
            password:secPassword

        })
        res.json({success:true});
     }
     catch(error){
        console.log(error);
        res.json({success:false})
     }
})

router.post('/login', [
    body('email').isEmail(),
    body('password').exists(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }


    const  email= req.body.email;
    try {
     
        let userData = await user.findOne({ email }); 
        if (!userData) {
            return res.status(400).json({  error: "User does not exist" });
        }
      


        const pwdCompare = await bcrypt.compare(req.body.password, userData.password); // this return true false.
        

      
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Try Logging in with correct password" });
        }

        const data = {
            users: {
                id: userData.id
            }
        }
        // success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success:true, authToken })




    } catch (error) {
        console.error(error.message)
        res.json({ success:false })
    }
})
// module.exports = router;
export default router
