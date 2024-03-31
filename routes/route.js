const express = require("express");
const bodyParser = require("body-parser");
const calculatePrice = require("./calculatePrice");
const Order = require("../models/Order");

const router = express.Router();
router.use(bodyParser.json());

router.post("/calculate-price", async (req, res) => {
  const { distance, itemType, zone } = req.body;
  if (
    typeof distance !== "number" ||
    typeof itemType !== "string" ||
    typeof zone !== "string"
  ) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const totalPrice = calculatePrice(distance, itemType, zone);
  const newOrder = new Order({
    distance,
    itemType,
    zone,
    totalPrice,
  });

  try {
    await newOrder.save();
    res.json({ totalPrice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

module.exports = router;
