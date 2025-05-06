import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  checkAuth,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secure route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-user").post(verifyJWT, refreshAccessToken);
router.route("/check-auth").get(verifyJWT, checkAuth);

export default router;
