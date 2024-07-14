// ## All Snippet APIs

// - [x]  #10 /allsnippet/:snippetId - post
// - [x]  #11 /allsnippet/:snippetId - delete
// - [x]  #12 /allsnippet/:snippetId - update - put
// - [x]  #13 /allsnippet - get - list all snippets

const Snippet = require("../models/snippetModel");
const cloudinary = require("../middlewares/cloudinaryConfig");

const getAllSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find().sort({ createdAt: -1 });

    if (!snippets) {
      return res.status(404).json({ message: "No snippets found" });
    }

    res.json(snippets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getSnippet = async (req, res) => {
  try {
    const snippetId = req.params.snippetId;
    const snippet = await Snippet.findById(snippetId);

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json(snippet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addSnippet = async (req, res) => {
  console.log("start");
  const exist = await Snippet.findOne({ title: req.body.title });
  console.log(exist, "exist");

  if (exist) {
    return res.status(409).json({ message: "Title already exists" });
  }
  //   console.log("start2")
  console.log("req.file.path", req.file.path);
  try {
    const snippetData = req.body;
    const result = await cloudinary.uploader.upload(
      req.file.path,
      function (err, result) {
        if (err) {
          res.status(500).json({ message: " Upload Image  Error" });
        }
      }
    );
    const { title, description, language, code, featured } = req.body;
    const newSnippet = new Snippet({
      title,
      description,
      language,
      code,
      image: result.url,
      featured,
    });

    const savedSnippet = await newSnippet.save();
    res.status(200).json({
      success: true,
      message: "Snippet Created",
      snippet: savedSnippet,
    });
  } catch (error) {
    console.log("end");
    console.error("eijojasdasnlknls", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateSnippet = async (req, res) => {
  try {
    const snippetId = req.params.snippetId;
    const updatedData = {
      ...req.body,
    };

    let url;
    if (req.file) {
      const result = await cloudinary.uploader.upload(
        req.file.path,
        function (err, result) {
          if (err) {
            res.status(500).json({ message: " Upload Image  Error" });
          }
        }
      );
      url = result.url;
    }
    if (url) updatedData.image = url;

    const snippet = await Snippet.findByIdAndUpdate(snippetId, updatedData, {
      new: true,
    });

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json(snippet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const searchSnippet = async (req, res) => {
  console.log(req.query);
  try {
    const { searchQuery } = req.query;
    if (!searchQuery) {
      return res.status(400).json({ message: "Please provide query" });
    }
    const regex = new RegExp(searchQuery, "i");
    // Create a case-insensitive regular expression for matching the start of the field
    const startRegex = new RegExp("^" + searchQuery, "i");

    // Find snippets that match the query
    const snippets = await Snippet.find({
      $or: [{ title: regex }, { description: regex }, { code: regex }],
    }).sort({
      title: { $regex: startRegex, $options: "i" } ? 1 : 0,
      description: { $regex: startRegex, $options: "i" } ? 1 : 0,
      code: { $regex: startRegex, $options: "i" } ? 1 : 0,
    });
    return res.status(200).json({ snippets });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

const deleteSnippet = async (req, res) => {
  try {
    const snippetId = req.params.snippetId;
    const snippet = await Snippet.findByIdAndDelete(snippetId);

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    res.json({ message: "Snippet deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getSnippetsByLanguage = async (req, res) => {
  try {
    const { language } = req.query;
    const snippets = await Snippet.find({ language });

    const snippetCount = snippets.length;

    if (snippetCount === 0) {
      return res
        .status(404)
        .json({ message: "No snippets found in this langauge" });
    }

    // Return the snippets and the count as the response
    res.json({ snippets, count: snippetCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllSnippets,
  getSnippet,
  addSnippet,
  updateSnippet,
  deleteSnippet,
  searchSnippet,
  getSnippetsByLanguage,
};
