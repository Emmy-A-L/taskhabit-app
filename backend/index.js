import express from "express";
import dbConnection from "./db/conn.js";
import userRoute from "./routes/UserRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";

const app = express();
const PORT = 4100;

dbConnection();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the App Management API");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
