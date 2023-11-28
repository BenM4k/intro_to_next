import { newTodo } from "@/utils/actions"

const NewTodoForm = () => {
  return (
    <div>
        <form action={newTodo} >
            <input type="text" name="content" className="text-black"/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodoForm