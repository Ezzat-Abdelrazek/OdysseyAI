import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import createRouter from "./routes/createRoutes.js";
import postRouter from "./routes/postRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/post", postRouter);
app.use("/api/v1/image", createRouter);

export default app;
