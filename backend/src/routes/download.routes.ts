import { Router } from "express";
import { createDownload } from "../controllers/download.controller.js";

const router:Router = Router();

router.post("/", createDownload);

export default router;