import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";
import type { Todo } from "../../lib/type";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const currentDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill required fields");
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      title: title,
      content: content,
      status: "pending",
      time: currentDate,
    };
    dispatch(addTodo(todo));
    toast.success("Add Todo Successfully");
    setTitle("");
    setContent("");
  };

  return (
    <div className="w-95 lg:w-120 flex justify-center p-4 sm:p-0">
      <div className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6 border-none">
        {/* Header */}
        <div className="mb-4 sm:mb-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Create Todo
          </h2>
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-100 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter todo title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Content Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-100 mb-1">
            Content
          </label>
          <textarea
            placeholder="Write your todo..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 text-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAdd}
          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-sm hover:shadow"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
