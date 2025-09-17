import mongoose from "mongoose";

export default async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MONGODB CONNECTED SUCCESSFULLY!");
    })
    .catch((error) => {
      console.error("Error connecting to MONGODB", error);
      process.exit(1);
    });
}
