import express from "express";

import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_SECRET,
  api_secret: process.env.AI_IMAGE_API_KEY,
});

import { createImg } from "../controllers/createControllers.js";

const router = express.Router();

router.route("/").post(createImg);

export default router;
