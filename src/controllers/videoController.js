const trending = (req, res) => res.send("Home Page Videos");
const see = (req, res) => res.send("Watch");
const edit = (req, res) => res.send("Edit");
const search = (req, res) => res.send("Search");
const upload = (req, res) => res.send("Upload");
const deleteVideo = (req, res) => res.send("Delete Video");

module.exports = { trending, see, edit, search, upload, deleteVideo };
