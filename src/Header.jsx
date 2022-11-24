import { useState } from "react"

export default function header({ addTodo }) {
    const [value, setValue] = useState("")

    return (
        <>
            <form action="#">
                <input type="text" name="" id="champ" value={value} onChange={(event) => {
                    setValue(event.target.value)
                }} />

                <input type="submit" value="Submit" onClick={() => {
                    addTodo(value)
                    setValue("")
                }} />
            </form>
        </>
    )

}