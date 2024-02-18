const bcrypt=require('bcrypt');
const user=require('../model/user');
const jwt=require("jsonwebtoken");
const { use } = require('../routes/user');
const upload = require('../middleware/upload');
const Beat = require('../model/beat');
const mongoose=require('mongoose');
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


exports.uploadBeat = async (req, res) => {
    try {

        const { title, producerName, tempo, mood, genre, instrument, price, coverImageUrl } = req.body;

        const producerId = new mongoose.Types.ObjectId();
        const newBeat = new Beat({
            title,
            producerId,
            producerName,
            tempo,
            mood,
            genre,
            instrument,
            price,
            coverImageUrl
        });

        await newBeat.save();

        res.status(201).json({ message: 'Beat uploaded successfully', beat: newBeat });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getBeatById = async (req, res) => {
    try {
        const beatId = req.params.id;
        const beat = await Beat.findById(beatId);

        if (!beat) {
            return res.status(404).json({ error: 'Beat not found' });
        }

        res.json(beat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getAllBeats = async (req, res) => {
    try {
        const beats = await Beat.find();
        res.status(200).json(beats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.purchaseBeat = async (req, res) => {
    try {
        const beatId = req.params.id;
        const userId = req.body.userId; // Assuming you pass the user ID in the request body

        const beat = await Beat.findById(beatId);
        if (!beat) {
            return res.status(404).json({ error: 'Beat not found' });
        }

        // Update the beat document with purchaser information
        beat.purchaser = userId;
        await beat.save();

        return res.status(200).json({ message: 'Beat purchased successfully', beat });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getPurchasedBeats = async (req, res) => {
    try {
        const userId = req.params.id;

        const exist = await user.findById(userId);
        if (!exist) {
            return res.status(404).json({ error: 'User not found' });
        }

        const purchasedBeats = await Beat.find({ purchaserId: userId });

        res.status(200).json(purchasedBeats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// exports.addBeat = async (req, res) => {
//     try {
//         const { title, userId } = req.body;
//         const beat = new Beat({ title });
//         await beat.save();
        
//         const exist = await user.findById(userId);
//         if (!exist) {
//             return res.status(404).json({ error: 'User not found' });
//         }
        
//         exist.beat = beat._id;
//         await exist.save();

//         res.status(201).json({ message: 'Beat added successfully', beat });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


// exports.addBeat = async (req, res) => {
//     try {
//         const { title, coverImageUrl, price, instrument, genre, mood, tempo, producerName, producerId } = req.body;
        
//         // Create a new Beat object with all the required fields
//         const beat = new Beat({ 
//             title,
//             coverImageUrl,
//             price,
//             instrument,
//             genre,
//             mood,
//             tempo,
//             producerName,
//             producerId
//         });

//         // Save the Beat to the database
//         await beat.save();
        
//         // Find the user by userId
//         const exist = await User.findById(producerId);
//         if (!exist) {
//             return res.status(404).json({ error: 'User not found' });
//         }
        
//         // Associate the beat with the user
//         exist.beats.push(beat._id);
//         await exist.save();

//         // Return a success response
//         res.status(201).json({ message: 'Beat added successfully', beat });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


