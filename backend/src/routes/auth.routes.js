import express from "express";
import {
  enable2FA,
  verify2FASetup,
  verifyLoginOTP
} from "../controllers/auth.controller.js";
import { userIdMiddleware } from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/enable-2fa", userIdMiddleware, enable2FA);
router.post("/verify-2fa", userIdMiddleware, verify2FASetup);
router.post("/verify-login", userIdMiddleware, verifyLoginOTP);

export default router;