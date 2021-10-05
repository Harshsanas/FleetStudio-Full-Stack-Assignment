const express = require("express");

const router = express.Router();

const Forms = require("../model/form.model");

router.get("/", async (req, res) => {
  try {
    const forms = await Forms.find({}).populate("form").lean().exec();
    res.status(200).json({ forms });
    // console.log(res)
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
  }
});

module.exports = router;
