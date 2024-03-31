function calculatePrice(distance, itemType, zone) {
  let baseDistance = 5;
  let basePrice = 10;
  let perKmPrice = 1;

  if (itemType === "perishable") {
    perKmPrice = 1.5;
  }

  let zoneMultiplier = 1;
  if (zone === "organization1") {
    zoneMultiplier = 1.2;
  }

  let totalPrice =
    basePrice +
    Math.max(distance - baseDistance, 0) * perKmPrice * zoneMultiplier;
  return totalPrice;
}

module.exports = calculatePrice;
