import { SquarePen, X } from "lucide-react";
import type { Todo } from "../../lib/type";
import EditTodoModel from "../../model/EditTodoModel";
import ConfirmModel from "../../model/ConfirmModel";
import { useState } from "react";

type Props = {
  todo: Todo;
  onEdit: (updatedTodo: Todo) => void;
  onDelete: (id: string) => void;
};

const TodoRow = ({ todo, onDelete, onEdit }: Props) => {
  const isCompleted = todo.status === "completed";
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [confirmModel, setConfirmModel] = useState<boolean>(false);

  return (
    <>
      <div
        className={`group flex items-center justify-between w-full p-3 sm:p-4 rounded-xl border transition-all duration-200 ${
          isCompleted
            ? "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 opacity-75"
            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500"
        }`}
      >
        {/* Content */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold truncate ${
                isCompleted
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {todo.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {todo.content}
            </p>
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-2 block">
              {todo.time}
            </span>
          </div>
        </div>

        {/* Badge */}
        <div className="shrink-0 mx-2 sm:mx-3">
          <span
            className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap ${
              isCompleted
                ? "bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : todo.status === "pending"
                  ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            }`}
          >
            {todo.status}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 shrink-0">
          <button
            aria-label="Edit"
            onClick={() => setOpenModel(true)}
            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 transition-colors shrink-0"
          >
            <SquarePen size={18} />
          </button>
          <button
            aria-label="Delete"
            onClick={() => setConfirmModel(true)}
            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Confirm Delete Modal */}
      {confirmModel && (
        <ConfirmModel
          todo={todo}
          onClose={() => setConfirmModel(false)}
          onConfirm={(id) => {
            onDelete(id);
            setConfirmModel(false);
          }}
        />
      )}

      {/* Edit Modal */}
      {openModel && (
        <EditTodoModel
          todo={todo}
          onClose={() => setOpenModel(false)}
          onSave={(updatedTodo) => {
            onEdit(updatedTodo);
            setOpenModel(false);
          }}
        />
      )}
    </>
  );
};

export default TodoRow;
