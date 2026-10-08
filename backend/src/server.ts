import express from "express";
import cors from "cors";

import downloadRoutes from "./routes/download.routes.js";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "Backend funcionando",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/download", downloadRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend ejecutándose en ${PORT}`);
});