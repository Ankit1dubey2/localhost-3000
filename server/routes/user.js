const mongoose = require('mongoose');
const express=require('express');
const router=express.Router();

const{login,signup,getUserProfile}=require('../controller/auth');
const upload = require('../middleware/upload');
const beatsController = require('../controller/auth');
const beatController = require('../controller/auth');
const userController=require('../controller/auth');
const Beat = require('../model/beat');


router.post('/login',login);
router.post('/signup',signup);
router.get('/users/:id',getUserProfile);
router.post('/', upload.single('beat'), beatsController.uploadBeat);
router.get('/beats/:id', beatController.getBeatById);
router.get('/beats', beatController.getAllBeats);
router.post('/beats/:id/purchase', beatsController.purchaseBeat);
router.get('/users/:id/purchased-beats', userController.getPurchasedBeats);
router.get('/api/beats/search', async (req, res) => {
    try {
        const keywords = req.query.keywords;
        if (typeof keywords !== 'string') {
            return res.status(400).json({ error: 'Keywords must be a string' });
        }

        const foundBeats = await Beat.find({
            $or: [
                { title: { $regex: keywords, $options: 'i' } }, 
                { producerName: { $regex: keywords, $options: 'i' } }, 
                { genre: { $regex: keywords, $options: 'i' } }, 
                { mood: { $regex: keywords, $options: 'i' } }, 
                { instrument: { $regex: keywords, $options: 'i' } }, 
            ]
        });

        res.status(200).json(foundBeats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports=router;