const { Router } = require("express");
const router = Router();
// CONTROLLER-FUNC
const {
  getAllTravels,
  getOneTravel,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
} = require("../controllers/travelControllers");

// CRUD-METHOD
// GET all-travel-book
router.get("/", getAllTravels);
// POST create-travel-book
router.post("/add", addTravelBook);
// GET one-travel-book
router.get("/:id", getOneTravel);
// PUT update-travel-book
router.put("/:id", updateTravelBook);
// DELETE remove-travel-book
router.delete("/:id", removeTravelBook);

module.exports = router;
