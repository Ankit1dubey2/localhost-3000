const jwt=require("jsonwebtoken");
require('dotenv').config();

exports.auth=(req,res,next)=>{
    try{
        const token=req.body.token;

        if(!token){
            return res.status(401).json({
                status:false,
                message:"Token missing",
            })
        }
        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);
            req.user=payload;
        }
        catch(error){
            return res.status(401).json({
                status:false,
                message:"Token is invalid",
            });
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            status:false,
            message:"Something went wrong while verifying the token",
        });
    }
}