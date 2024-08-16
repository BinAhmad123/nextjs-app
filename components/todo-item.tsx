"use client";
import { Todo } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";
interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onChange: (todo: Todo) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [validate, setValidate] = useState("");
  const handleSaveClick = () => {
    if (editedTodo.title.trim() === "") {
      setValidate("Title is required");
      return;
    }
    if (editedTodo.description.trim() === "") {
      setValidate("Description is required");
      return;
    }
    setIsEditing(false);
    onChange(editedTodo);
    toast.success("Todo Edited");
  };
  const handleInputChange = (field: keyof Todo, value: string) => {
    setEditedTodo({
      ...editedTodo,
      [field]: value,
    });
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTodo(todo); // Revert changes
  };
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <div className="my-2">
          <input
            className="w-full h-12 p-4 rounded-md border"
            placeholder="Todo Name"
            value={editedTodo.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
        <div className="my-2">
          <input
            className="w-full h-12 p-4 rounded-md border"
            placeholder="Todo Description"
            value={editedTodo.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
        {validate && (
          <span className="text-sm inline-flex bg-red-50 px-3 rounded-md font-semibold text-red-400">
            {validate}
          </span>
        )}
        <div className="actions text-sm flex gap-x-2 py-4">
          <button
            onClick={handleSaveClick}
            className="px-4 rounded-md py-1 text-white bg-green-700 font-semibold"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="px-4 rounded-md py-1 text-white bg-gray-700 font-semibold"
          >
            Cancel
          </button>
        </div>
      </>
    );
  } else {
    todoContent = (
      <>
        <h4
          className={`text-2xl font-semibold tracking-tight ${
            todo.done && "line-through"
          }`}
        >
          {todo.title}
        </h4>
        <p>{todo.description}</p>
        <div className="actions text-sm flex gap-x-2 py-4">
          <button
            onClick={() => onDelete(todo.id)}
            className="px-4 rounded-md py-1 text-white bg-red-500 font-semibold"
          >
            Delete
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 rounded-md py-1 text-white bg-sky-700 font-semibold"
          >
            Edit
          </button>
        </div>
      </>
    );
  }
  return (
    <div
      className={`bg-white text-black border space-y-1 rounded-md p-4 ${
        todo.done ? "bg-green-50 shadow-xl" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
    </div>
  );
};
export { TodoItem };
