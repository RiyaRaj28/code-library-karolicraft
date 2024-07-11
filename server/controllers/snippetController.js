// ## All Snippet APIs

// - [x]  #10 /allsnippet/:snippetId - post
// - [x]  #11 /allsnippet/:snippetId - delete
// - [x]  #12 /allsnippet/:snippetId - update - put
// - [x]  #13 /allsnippet - get - list all snippets

const Snippet = require('../models/snippetModel');

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

        res.status(200).json({
            success: true,
            message: 'Snippet Created',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateSnippet = async (req, res) => {
    try {
        const snippetId = req.params.snippetId;
        const snippet = await Snippet.findByIdAndUpdate(snippetId, req.body, { new: true });

        if (!snippet) {
            return res.status(404).json({ message: 'Snippet not found' });
        }

        res.json(snippet);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteSnippet = async (req, res) => {
    try {
        const snippetId = req.params.snippetId;
        const snippet = await Snippet.findByIdAndDelete(snippetId);

        if (!snippet) {
            return res.status(404).json({ message: 'Snippet not found' });
        }

        res.json({ message: 'Snippet deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllSnippets,
    getSnippet,
    addSnippet,
    updateSnippet,
    deleteSnippet,
};