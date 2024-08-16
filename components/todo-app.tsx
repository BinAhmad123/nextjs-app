"use client"
import { useState } from "react"
import { AddTodoForm } from "./add-todo-form"
import { TodoList } from "./todo-list"
import { Todo } from "@/types"
import toast from "react-hot-toast"
export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  function onAddTodo(title: string, description: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        description,
        done: false,
      },
    ])
    toast.success("Todo Added.")
  }
  function onDeleteTodo(todoId: number) {
    setTodos(todos.filter((todo) => todo.id !== todoId))
    toast.success("Todo Deleted.")
  }
  function onChangeTodo(newTodo: Todo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    )
  }
  return (
    <div>
      <AddTodoForm onAddTodo={onAddTodo} />
      <div>
        <TodoList
          onChange={onChangeTodo}
          onDelete={onDeleteTodo}
          todos={todos}
        />
      </div>
    </div>
  )
}
let nextId = 0