const { Schema, model } = require("mongoose");

const travelModel = new Schema({
  title: {
    type: String,
    require: true,
    minlength: 3,
  },
  image: {
    type: String,
    require: true,
  },
  descr: {
    type: String,
    require: true,
  },
});

module.exports = model("Travel", travelModel);
