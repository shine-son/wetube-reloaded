const videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "",
        views: 1,
        id: 2,
    },
];

const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", videos });
const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", {
        pageTitle: `Watching: ${video.title}`,
        video,
    });
};
const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

module.exports = {
    trending,
    watch,
    getEdit,
    postEdit,
};
