import { Router } from "express";
import {
  deleteDeck,
  createDeck,
  getDeck,
  toggleShare,
  viewSharedDeck,
} from "../controllers/decks.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/").get(getDeck);
router.route("/create").post(verifyJWT, createDeck);
router.route("/decks/:id").delete(deleteDeck);

router.route("/decks/:id/share").delete(toggleShare);
router.route("/shared/:shareId").delete(viewSharedDeck);

export default router;
