import express from "express";
import { getAllPosts, createPost } from "../controllers/postControllers.js";
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/../.env` });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);

export default router;
