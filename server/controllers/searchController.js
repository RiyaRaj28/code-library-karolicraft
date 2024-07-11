// ## Home APIs
// - [x]  #5 /home - getAll - filter by featured true or false
// - [x]  #6 /home/:titleId - get - filter by titleId


// ## Search APIs
// - [x]  #7 /search - get -> getAllSnippets 
// - [x]  #8 /search/:languageId - get - filter by languageId
// - [x]  #9 /search/:titleId - get - filter by titleId -> getSnippetByTitle

const Snippet = require('../models/snippetModel');

const getFeaturedSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find({ featured: true });
        if (!snippets) {
            return res.status(404).json({ message: "No featured snippets found" });
        }

        const snippetCount = snippets.length;

        // Return the snippets and the count as the response
        res.json({ snippets, count: snippetCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getSnippetByTitle = async (req, res) => {
    try {
        const { title } = req.body;
        const snippet = await Snippet.findOne({ title });

        if (!snippet) {
            return res.status(404).json({ message: "Snippet not found" });
        }

        res.json(snippet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getSnippetsByLanguage = async (req, res) => {
    try {
        const { language } = req.body;
        const snippets = await Snippet.find({ language });

        const snippetCount = snippets.length;

        if (snippetCount === 0) {
            return res.status(404).json({ message: "No snippets found in this langauge" });
        }

        // Return the snippets and the count as the response
        res.json({ snippets, count: snippetCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { 
    getFeaturedSnippets,
    getSnippetByTitle,
    getSnippetsByLanguage,
};


