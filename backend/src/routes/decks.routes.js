import { Router } from "express";
import {
  deleteDeck,
  getDecks,
  toggleShare,
  viewSharedDeck,
} from "../controllers/decks.controller.js";

const router = Router();

router.route("/decks").get(getDecks);
router.route("/decks/:id").delete(deleteDeck);

router.route("/decks/:id/share").delete(toggleShare);
router.route("/shared/:shareId").delete(viewSharedDeck);

export default router;
