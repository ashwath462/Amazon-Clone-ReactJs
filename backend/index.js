import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const exp = express()
exp.use(express.json())
exp.use(express.urlencoded())
exp.use(cors())

mongoose.connect("mongodb://localhost:27017/Amazon",()=>{
    console.log('DB Connected')
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

exp.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

exp.post("/register", (req, res)=> {
    const { email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

exp.listen(9002,() => {
    console.log("BE started at port 9002")
})