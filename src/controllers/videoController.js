export const trending = (req, res) => {
    const videos = [
        {
            title: "First",
            rating: 5,
            comments: 2,
            createdAt: "2 Minutes ago",
            views: 59,
            id: 1
        },
        {
            title: "Second",
            rating: 5,
            comments: 2,
            createdAt: "2 Minutes ago",
            views: 59,
            id: 1
        },
        {
            title: "Third",
            rating: 5,
            comments: 2,
            createdAt: "2 Minutes ago",
            views: 59,
            id: 1
        },

    ];
    return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");