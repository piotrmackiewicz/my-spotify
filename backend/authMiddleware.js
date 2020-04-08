require("dotenv").config();
const sjcl = require("sjcl");

function authMiddleware(req, res, next) {
  const cryptedToken = req.headers["x-crypted-token"];
  if (!cryptedToken) {
    return res.status(400).json({
      errorDescription: "missing crypted access token",
    });
  }

  req.accessToken = sjcl.decrypt(process.env.CRYPT_SECRET, cryptedToken);

  console.log("ACCESS TOKEN", req.accessToken);

  next();
}

module.exports = authMiddleware;
