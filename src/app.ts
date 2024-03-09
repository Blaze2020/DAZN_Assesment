import express, { NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import movieRoutes from "./routes/movieRoutes.js";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI as string;

app.use("/api", movieRoutes);
app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Welcome to Ts");
});

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
};

connectToMongoDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
export default app;
