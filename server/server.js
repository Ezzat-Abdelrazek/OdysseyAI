import app from "./index.js";
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";

dotenv.config({ path: "./.env" });

const start = () => {
  app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
  });
  connectDB(
    process.env.MONGODB_CONNECTION_STRING,
    process.env.MONGODB_PASSWORD
  );
};

start();
