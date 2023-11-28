import NewTodoForm from '@/components/NewTodoForm'
import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getTodos = async () => {
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async () => {
  const todos = await getTodos();
  return (
    <div>
        <h1>Todos</h1>
        <TodoList todos={todos} />
        <NewTodoForm />
    </div>
  )
}

export default TodosPage