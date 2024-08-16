import { Todo } from "@/types"
import { TodoItem } from "./todo-item"
interface TodoListProps {
  todos: Todo[]
  onDelete: (id: number) => void
  onChange: (todo: Todo) => void
}
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          onChange={onChange}
          onDelete={onDelete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}