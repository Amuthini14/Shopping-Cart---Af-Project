/**
 * Review Schema
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    
  },
  
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("reviews",reviewSchema)

