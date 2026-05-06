import { User } from "../models/user.model.js";
import { generateSecret, generateQRCode, verifyToken } from "../utils/twofa.js";


// 🔹 Enable 2FA (generate QR)
export const enable2FA = async (req, res) => {
  const user = await User.findById(req.user._id);
  const secret = generateSecret(user.email);

  user.twoFactorSecret = secret.base32;
  await user.save();

  const qr = await generateQRCode(secret.otpauth_url);

  res.json({ qr });
};


// 🔹 Verify first time
export const verify2FASetup = async (req, res) => {
  const { token } = req.body;

  const user = await User.findById(req.user._id);

  const isValid = verifyToken(user.twoFactorSecret, token);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  user.twoFactorEnabled = true;
  await user.save();

  res.json({ message: "2FA enabled successfully" });
};


// 🔹 Login OTP verify
export const verifyLoginOTP = async (req, res) => {
  const { token } = req.body;

  const user = await User.findById(req.user._id);

  const isValid = verifyToken(user.twoFactorSecret, token);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  res.json({ message: "Login successful" });
};