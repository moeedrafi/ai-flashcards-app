import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  getFlashcard,
  createFlashcard,
  editFlashcard,
} from "../controllers/flashcard.controller.js";

const router = Router();

router
  .route("/generate")
  .post(verifyJWT, upload.single("file"), createFlashcard);
router.route("/flashcard/:id").get(getFlashcard);
router.route("/flashcard/:id").patch(editFlashcard);

export default router;
