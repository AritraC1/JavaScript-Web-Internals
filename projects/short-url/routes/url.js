const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleGetUrl,
  handleAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/url", handleGenerateNewShortUrl);

router.get("/:shortId", handleGetUrl);

router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
