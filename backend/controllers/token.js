const express = require("express");
const router = express.Router();
const sjcl = require("sjcl");
const axios = require("axios");
require("dotenv").config();
const superagent = require("superagent");

const auth = Buffer.from(
  `${process.env.CLIENT_ID}:${process.env.SECRET}`
).toString("base64");

const apiUrl = "https://accounts.spotify.com/api/token";
const contentType = "application/x-www-form-urlencoded";

router.post("/", (req, res) => {
  const { code } = req.body;
  superagent
    .post(apiUrl)
    .send({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
    })
    .set("Authorization", `Basic ${auth}`)
    .set("Content-Type", contentType)
    .end((err, { body }) => {
      if (err) {
        res.json(err);
      }
      const encryptedAccessToken = sjcl.encrypt(
        process.env.CRYPT_SECRET,
        body.access_token
      );
      const encryptedRefreshToken = sjcl.encrypt(
        process.env.CRYPT_SECRET,
        body.refresh_token
      );
      res.json({
        encryptedAccessToken,
        encryptedRefreshToken,
      });
    });
});

router.post("/refresh", (req, res) => {
  const { encryptedRefreshToken } = req.body;
  superagent
    .post(apiUrl)
    .send({
      grant_type: "refresh_token",
      refresh_token: sjcl.decrypt(
        process.env.CRYPT_SECRET,
        encryptedRefreshToken
      ),
    })
    .set("Authorization", `Basic ${auth}`)
    .set("Content-Type", contentType)
    .end((err, response) => {
      if (err) {
        res.json(err);
      }

      const { body } = response;
      const encryptedAccessToken = sjcl.encrypt(
        process.env.CRYPT_SECRET,
        body.access_token
      );
      res.json({
        encryptedAccessToken,
      });
    });
});

module.exports = router;
