import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: {
    type: "string",
    isRequired: [true, "Name is Required"],
  },
  prompt: {
    type: "string",
    isRequired: [true, "Prompt is Required"],
  },
  photo: {
    type: "string",
    isRequired: [true, "Photo is Required"],
  },
});

const Post = new mongoose.model("post", postSchema);

export default Post;
