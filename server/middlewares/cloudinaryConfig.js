const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:"dopcoheig",
    api_key: 254899255223128,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;

