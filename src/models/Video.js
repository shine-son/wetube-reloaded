const { mongoose, Schema } = require("mongoose");

// const formatHashtags = (hashtags) => {
//     hashtags
//         .split(",")
//         .map((word) => (word.startsWith("#") ? word : `#${word}`));
// };

const VideoSchema = new Schema(
    {
        title: { type: String, require: true, trim: true },
        description: { type: String, require: true },
        hashtags: [{ type: String, trim: true }],
        meta: {
            views: { type: Number, default: 0, require: true },
            rating: { type: Number, default: 0, require: true },
        },
    },
    {
        timestamps: true,
    }
);

// VideoSchema.pre("save", async function () {
//     this.hashtags = this.hashtags[0]
//         .split(",")
//         .map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

VideoSchema.static("formatHashtags", function (hashtags) {
    return hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
// module.exports = { Video, formatHashtags };
