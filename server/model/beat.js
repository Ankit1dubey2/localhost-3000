const mongoose = require('mongoose');


const beatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    producerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    producerName: {
        type: String,
        required: true
    },
    tempo: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    instrument: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
});


const Beat = mongoose.model('Beat', beatSchema);

module.exports = Beat;