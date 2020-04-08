const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", (_req, res) => {
  const scopesArr = [
    "user-read-private",
    "user-read-email",
    "streaming",
    "user-read-currently-playing",
    "user-modify-playback-state"
  ];
  res.redirect(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${
      process.env.CLIENT_ID
    }&scope=${encodeURIComponent(scopesArr.join(" "))}&redirect_uri=${
      process.env.REDIRECT_URI
    }`
  );
});

module.exports = router;
