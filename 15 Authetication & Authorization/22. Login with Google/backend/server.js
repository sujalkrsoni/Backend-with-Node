import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import errorHandler from "./middleware/ErrorHandler.js";
import userRoutes from "./routes/userRoutes.js"
 
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  }), 
); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

// Routes 
// app.use("/", (req, res) => {       
//   res.send("Backend Running..."); 
// });

app.use("/user", userRoutes) 

await connectDb();
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
