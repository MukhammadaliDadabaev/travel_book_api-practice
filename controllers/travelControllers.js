const Travel = require("../models/Travel.model");

//---------->  CRUD-METHOD
// GET all-travel
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "success",
      travels,
    });
  } catch (error) {
    res.send(error);
  }
};

// GET-ID one-travel
const getOneTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    return res.status(200).json({
      message: "success",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

// POST create-travel
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const newTravelBook = await Travel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "success",
      newTravelBook,
    });
  } catch (error) {
    res.send(error);
  }
};

// PUT update-travel-book by-ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const updatedTravelBook = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });

    res.status(200).json({
      message: "success",
      updatedTravelBook,
    });
  } catch (error) {
    res.send(error);
  }
};

// DELETE REMOVE-travel-book by-ID
const removeTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "DELETED",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllTravels,
  getOneTravel,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
};
