import express from "express";
import protect from "../middlewares/auth-middlewares.js";
import {
  enhanceProfessionalSummary,
  enhanceJobDescription,
  uploadResume,
} from "../controllers/ai-jobs-controller.js";

const aiRouter = express.Router();

aiRouter.post("/enhance-pro-sum", protect, enhanceProfessionalSummary);
aiRouter.post("/enhance-job-desc", protect, enhanceJobDescription);
aiRouter.post("/upload-resume", protect, uploadResume);

export default aiRouter;
