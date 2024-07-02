import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes.js";
dotenv.config();
const { PORT } = process.env;

// Config
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res) => {
  const host = req.hostname;
  const prot = req.protocol;
  let url = `${prot}://${host}/api/hello?visitor_name=Mark`;
  if (host == "127.0.0.1") {
    url = `${prot}://${host}:${PORT}/api/hello?visitor_name=Mark`;
  }
  res.status(404).json({
    message: "Route not found",
    goTo: url,
    status: 404,
  });
  0;
});

app.use((req, res) => {
  res.status(500).json({
    message: "An internal server error occurred",
    status: 500,
  });
});

// app.use((req, res) => res.send("Server is Alive"));
app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
