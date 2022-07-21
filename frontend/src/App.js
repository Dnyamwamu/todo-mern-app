import { useState, useEffect } from "react"
import Axios from "axios"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:2000/gettodos").then((response) => {
      setTodos(response.data)
    })
  }, [])

  const createtodo = () => {
    Axios.post("http://localhost:2000/createtodo", { title, description }).then(
      (response) => {
        setTodos([...todos, { title, description }])
      }
    )
  }

  return (
    <div className="App">
      <div>
        <h1 style={{ color: "red" }}>Todos</h1>

        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>{todo.date}</p>
            </div>
          )
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />

        <button onClick={createtodo}>Submit</button>
      </div>
    </div>
  )
}

export default App
