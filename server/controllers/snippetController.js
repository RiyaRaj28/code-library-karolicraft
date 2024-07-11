const Snippet = require('../models/snippetModel')
// ## Add Snippet APIs

// - [ ]  #9 /addsnippet - post

// snippet schema : 

// {
// "title": "string",
// "description": "string",
// "code": "string",
// "Featured":false,
// "language": "string",
// "createdAt": "date",
// "updatedAt": "date",

// “image” : “string”
// }

// ## All Snippet APIs

// - [ ]  #10 /allsnippet/:snippetId - post
// - [ ]  #11 /allsnippet/:snippetId - delete
// - [ ]  #15 /allsnippet/:snippetId - update - put
// - [ ]  #16 /allsnippet - get - list all snippets

const getAllSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find().sort({ createdAt: -1 });

        if(!snippets) {
            return res.status(404).json({ message: 'No snippets found' });
        }   

        res.json(snippets);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getSnippet = async (req, res) => {
    try {
        const snippetId = req.params.snippetId;
        const snippet = await Snippet.findById(snippetId);

        if (!snippet) {
            return res.status(404).json({ message: 'Snippet not found' });
        }

        res.json(snippet);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const addSnippet = async (req, res) => {
    try {
        const snippet = new Snippet(req.body);
        await snippet.save();

        res.json(snippet);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllSnippets,
    getSnippet,
    addSnippet,

};