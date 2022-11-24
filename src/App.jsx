import { useRef, useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  const [todos, setTodos] = useState([])
  const [todosFilter, setTodosFilter] = useState(todos)

  const addTodo = (name) => {

    if (name === "" || todos.find(el => el.value === name)) {
      return
    }

    setTodos([...todos, { value: name, id: todos.length, checked: false }])
    setTodosFilter([...todos, { value: name, id: todos.length, checked: false }])
  }
  return (
    <>
      <Header addTodo={addTodo}></Header>
      <TodoList todos={todosFilter} setTodos={setTodos}></TodoList>
      <Footer todos={todos} setTodosFilter={setTodosFilter}></Footer>
    </>
  )
}

export default App
