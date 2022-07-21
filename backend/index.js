const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const todoModel = require("./models/todo")

const app = express()
mongoose.connect("mongodb://localhost:27017/todo")

app.use(cors())
app.use(express.json())

app.get("/gettodos", (req, res) => {
  todoModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.post("/createtodo", async (req, res) => {
  const todo = req.body
  const newtodo = todoModel(todo)
  await newtodo.save()

  res.json(todo)
})

app.listen(2000, () => {
  console.log("listening on port 2000")
})
