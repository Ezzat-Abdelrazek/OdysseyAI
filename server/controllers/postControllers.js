import Post from "../models/postModel.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).send({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).send({
      status: "failed",
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).send({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      status: "failed",
      message: error,
    });
  }
};
