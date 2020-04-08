const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const authMiddleware = require("../authMiddleware");
const superagent = require("superagent");
router.use(authMiddleware);

router.get("/", (req, res) => {
  superagent
    .get("https://api.spotify.com/v1/me")
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err, response) => {
      if (err) {
        return res.json(err);
      }
      const { body } = response;
      console.log(body)
      const { display_name } = body;
      const { images } = body;

      return res.json({
        name: display_name.split(" ")[0],
        avatar: images[0].url,
      });
    });
});

router.get("/playlists", (req, res) => {
  superagent
    .get("https://api.spotify.com/v1/me/playlists?limit=50")
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err, response) => {
      if (err) {
        return res.json(err);
      }
      const { body } = response;
      return res.json(body);
    });
});

router.get("/player/currently-playing", (req, res) => {
  superagent
    .get("https://api.spotify.com/v1/me/player/currently-playing")
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err, response) => {
      if (err) {
        return res.json(err);
      }
      const { body } = response;
      return res.json(body);
      if (!body.item) {
        return res.json({})
      }
      return res.json({
        name: body.item.name,
        artists: body.item.artists.map((artist) => ({
          name: artist.name,
          id: artist.id,
        })),
        id: body.item.id,
        album: {
          name: body.item.album.name,
          id: body.item.album.id,
          image: body.item.album.images[0].url,
        },
        isPlaying: body.is_playing,
      });
    });
});

router.post("/player/next", (req, res) => {
  superagent
  .post("https://api.spotify.com/v1/me/player/next")
  .set("Authorization", `Bearer ${req.accessToken}`)
  .end((err) => {
    if (err) {
      return res.json(err)
    }
    return res.sendStatus(204)
  })
})

router.post("/player/previous", (req, res) => {
  superagent
  .post("https://api.spotify.com/v1/me/player/previous")
  .set("Authorization", `Bearer ${req.accessToken}`)
  .end((err) => {
    if (err) {
      return res.json(err)
    }
    return res.sendStatus(204)
  })
})

router.put("/player/pause", (req, res) => {
  superagent
    .put("https://api.spotify.com/v1/me/player/pause")
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err) => {
      if (err) {
        return res.json(err)
      }
      return res.sendStatus(204)
    })
})

router.put("/player/play", (req, res) => {
  superagent
    .put("https://api.spotify.com/v1/me/player/play")
    .set("Authorization", `Bearer ${req.accessToken}`)
    .end((err) => {
      if (err) {
        return res.json(err)
      }
      return res.sendStatus(204)
    })
})

module.exports = router;
