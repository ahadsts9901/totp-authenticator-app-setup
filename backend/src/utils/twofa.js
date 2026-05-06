import speakeasy from "speakeasy";
import QRCode from "qrcode";

export const generateSecret = (email) => {
  return speakeasy.generateSecret({
    name: `MyApp (${email})`
  });
};

export const generateQRCode = async (otpauth_url) => {
  return await QRCode.toDataURL(otpauth_url);
};

export const verifyToken = (secret, token) => {
  return speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 1
  });
};