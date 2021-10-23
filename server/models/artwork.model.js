const mongoose = require('mongoose');

const ArtworkSchema = new mongoose.Schema({
    artist: {
        type: String,
    },

    imageFile: {
        type: String,
        required: false
    },
}, {timestamps: true} );

module.exports.Artwork = mongoose.model('Artwork',ArtworkSchema);