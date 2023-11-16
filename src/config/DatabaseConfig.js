import mongoose from "mongoose";
import logger from "../api/helpers/logger.js";

// connect and export MongoDB database
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env["MONGO_DB_URI"]);
    logger.info("Connected to MongoDB database!!!");
  } catch (error) {
    logger.error("MongoDB connection error", error);
    process.exit(1);
  }
};
