import mongoose from "mongoose";

const connectDB = (connectionString, password) => {
  mongoose
    .connect(connectionString.replace("<password>", password))
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"));
};

export default connectDB;
