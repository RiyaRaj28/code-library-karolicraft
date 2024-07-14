// ## Home APIs
// - [x]  #5 /home - getAll - filter by featured true or false
// - [x]  #6 /home/:titleId - get - filter by titleId

// ## Search APIs
// - [x]  #7 /search - get -> getAllSnippets
// - [x]  #8 /search/:languageId - get - filter by languageId
// - [x]  #9 /search/:titleId - get - filter by titleId -> getSnippetByTitle

const Snippet = require("../models/snippetModel");

const handleFeaturedSnippets = async (req, res) => {
  try {
    const { id } = req.params;

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      return res.status(400).json({ message: "Snippet not found" });
    }

    snippet.featured = !snippet.featured;
    await snippet.save();
    return res.status(200).json({ message: "snippet featured update" });
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

module.exports = {
  handleFeaturedSnippets,
  getSnippetByTitle,
};
