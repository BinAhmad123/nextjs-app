"use client"
import { FormEvent, useState } from "react"
interface AddTodoFormProps {
  onAddTodo: (title: string, description: string) => void
}
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [validate, setValidate] = useState("")
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!title) {
      setValidate("Title is required")
      return
    }
    if (!description) {
      setValidate("Description is required")
      return
    }
    onAddTodo(title, description)
    setTitle("")
    setDescription("")
    setValidate("")
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white/60 p-4 border  shadow-md rounded-md mb-6"
    >
      <div className="my-2">
        <input
          className="w-full h-12 p-4 rounded-md border text-black"
          placeholder="Todo Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="my-4">
        <input
          className="w-full h-12 p-4 rounded-md border text-black"
          placeholder="Todo Desription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {validate && (
        <span className="text-sm inline-flex bg-red-50 px-3 rounded-md font-semibold text-red-400">
          {validate}
        </span>
      )}
      <div>
        <button
          className="p-2 bg-slate-700 hover:bg-slate-800 transition-all text-white text-sm font-semibold px-5 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  )
}
export { AddTodoForm }