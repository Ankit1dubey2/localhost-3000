const express=require('express');
const router=express.Router();

const{login,signup,getUserProfile}=require('../controller/auth');
const upload = require('../middleware/upload');
const beatsController = require('../controller/auth');

router.post('/login',login);
router.post('/signup',signup);
router.get('/users/:id',getUserProfile);
router.post('/', upload.single('beat'), beatsController.uploadBeat);


module.exports=router;