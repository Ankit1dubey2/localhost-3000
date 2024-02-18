const bcrypt=require('bcrypt');
const user=require('../model/user');
const jwt=require("jsonwebtoken");
const { use } = require('../routes/user');
const upload = require('../middleware/upload');
require('dotenv').config();

exports.signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        const existinguser=await user.findOne({email});

        if(existinguser){
            return res.status(400).json({
                success:false,
                message:"User already registered with the same email"
            });
        }

        let hashedpass;

        try{
            hashedpass=await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error while hashing the password"
            });
        }
        const User=await user.create({
            name,email,password:hashedpass
        })
        return res.status(200).json({
            status:true,
            message:"User registered successfully"
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            status:false,
            message:"User can not be registered try again after sometime"
        });
    }
}

exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                status:false,
                message:"Enter the complete details"
            })
        }
        let exist=await user.findOne({email});
        if(!exist){
            return res.status(401).json({
                status:false,
                message:"The user with this email id does not exist"
            });
        }
        const payload={
            email:exist.email,
            id:exist._id,
        };
        if(await bcrypt.compare(password,exist.password)){
            let token=jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h",
                                });
            exist=exist.toObject();
            exist.token=token;
            exist.password=undefined;
            const option={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("localhost:3000",token,option).status(200).json({
                success:true,
                token,
                exist,
                message:"user logged in successfully",
            });
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Irrcorrect password",
            });
        }
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            status:false,
            message:"User can not be registered try again after sometime"
        });
    }
}



exports.getUserProfile=async(req, res)=>{
    const userId = req.params.id;
    try {
        const exist = await user.findById(userId);

        if (exist) {
            res.json(exist); 
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } 
    catch (err) {
        console.error(err);
        res.status(500).json(
            { 
                error: 'Internal server error' 
            }
            );
    }
}



exports.uploadBeat = (req, res) => {
    const beatFile = req.file;
    res.status(200).json(
        { 
            message: 'Beat uploaded successfully', file: beatFile 
        }
    );
};


