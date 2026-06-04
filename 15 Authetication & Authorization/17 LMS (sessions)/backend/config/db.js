import mongoose from "mongoose";

const DB_URIS = [
  process.env.MONGO_URI,
  // "mongodb://admin:admin@localhost:27017/lmsApp?authSource=admin",
  "mongodb+srv://mrsujal:mrsujal@cluster0.6u8b04c.mongodb.net/lsmApp",
].filter(Boolean);

export async function connectDB() {
  for (const uri of DB_URIS) {
    try {
      await mongoose.connect(uri);
      console.log(`Database connected: ${uri}`);
      return;
    } catch (err) {
      console.log(`Database connection failed for: ${uri}`);
      console.log(err.message);
    }
  }

  console.log("Could not connect to MongoDB. Start MongoDB or set MONGO_URI in environment.");
  process.exit(1);
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Database Disconnected!");
  process.exit(0);
});
