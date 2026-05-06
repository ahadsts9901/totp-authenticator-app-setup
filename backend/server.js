import dotenv from "dotenv";
import app from "./src/app.js";
import cors from "cors"
import { connectDB } from "./src/config/db.js";

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running");
});