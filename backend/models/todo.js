const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
})

const todoModel = mongoose.model("todo", todoSchema)

module.exports = todoModel
