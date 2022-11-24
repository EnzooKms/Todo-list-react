export default function Todo({ todo, setTodos, todos }) {
    return (
        <li><input defaultChecked={todo.checked} type="checkbox" name="" id="" onChange={() => { }} onClick={() => {
            setTodos((prevState) => {
                const index = prevState.findIndex(el => el.id === todo.id)
                const newState = [...prevState]
                newState[index] = { ...prevState[index], checked: !prevState[index].checked }
                return newState
            })
        }} />{todo.value}</li>
    )
}