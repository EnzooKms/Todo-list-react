export default function Footer({ todos, setTodosFilter }) {
    return (
        <>
            <input type="button" value="TODO" onClick={() => {
                console.log(todos);
                setTodosFilter(todos.filter(el => el.checked === false))
            }} />

            <input type="button" value="DONE" onClick={() => {
                console.log(todos);
                setTodosFilter(todos.filter(el => el.checked === true))
            }} />

            <input type="button" value="ALL" onClick={() => {
                setTodosFilter(todos)
            }} />
        </>
    )
}