const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

const loginController = require("./controllers/login");
const tokenController = require("./controllers/token");
const meController = require("./controllers/me");
const playlistsController = require("./controllers/playlists");

app.use(bodyParser.json());

// app.all("/*", function (_req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,PUT,POST,OPTIONS,PATCH,DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context"
//   );

//   next();
// });

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

router.use("/login", loginController);
router.use("/token", tokenController);
router.use("/me", meController);
router.use("/playlists", playlistsController);

app.use("/api", router);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
