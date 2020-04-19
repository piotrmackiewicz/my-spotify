const express = require("express");
const router = express.Router();
require("dotenv").config();
const authMiddleware = require("../authMiddleware");
const superagent = require("superagent");
router.use(authMiddleware);

router.get("/:playlistId", (req, res) => {
  superagent
    .get(`https://api.spotify.com/v1/playlists/${req.params.playlistId}`)
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err, response) => {
      if (err) {
        return res.json(err);
      }
      const { body } = response;
      const { id, name, description, uri, images, tracks } = body;
      return res.json({
        id,
        name,
        description,
        uri,
        image: images[0].url,
        tracks: tracks.items,
      });
    });
});

module.exports = router;
