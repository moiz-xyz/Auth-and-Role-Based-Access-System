import express from "express";
import "dotenv/config";
import router from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
