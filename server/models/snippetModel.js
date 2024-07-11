const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
    title:
    {
        type: String, 
        required: true 
    },
    description: 
    { 
        type: String, 
        required: true 
    },
    code: 
    { 
        type: String, 
        required: true 
    },
    featured: 
    { 
        type: Boolean,
        default: false 
    },
    language: 
    { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: 
    { 
        type: Date, 
        default: Date.now 
    },
    image: 
    { 
        type: String 
    }
});

const Snippet = mongoose.model('snippet', snippetSchema);

module.exports = Snippet; 

