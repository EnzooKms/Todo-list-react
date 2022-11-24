import Todo from "./Todo"

export default function TodoList({ todos, setTodos }) {
    return (<ul>
        {
            todos.map((todo) => {
                return <Todo todos={todos} key={todo.value} todo={todo} setTodos={setTodos}></Todo>
            })
        }
    </ul>)
}