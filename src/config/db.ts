import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Failed to connect to the database:", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
  process.exit(1);
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDb connection error:", err);
  process.exit(1);
});

export default mongoose;
