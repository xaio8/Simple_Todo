import { useDispatch, useSelector } from "react-redux";
import TodoRow from "./TodoRow";
import type { RootState } from "../../store";
import { removeTodo, updateTodo } from "../../store/slices/todoSlice";
import type { Todo } from "../../lib/type";
import toast from "react-hot-toast";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
    toast.success("Remove successfully from the list");
  };

  const handleEdit = (updatedTodo: Todo) => {
    dispatch(
      updateTodo({
        id: updatedTodo.id,
        title: updatedTodo.title,
        content: updatedTodo.content,
        status: updatedTodo.status,
      }),
    );
  };

  return (
    <div className="w-full max-w-xl p-2 lg:p-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
        Todo Lists{" "}
        <span className="text-gray-600 dark:text-green-500">
          ({todos.length})
        </span>
      </h2>

      <div className="space-y-3 sm:space-y-4 mt-3 max-h-[60vh] sm:max-h-96 overflow-y-auto pr-1 sm:pr-2 custom-scroll p-2">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <p className="text-gray-500 text-sm dark:text-white">
              No todos yet...
            </p>
            <p className="text-gray-400 text-xs mt-1 dark:text-white">
              Create one to get started
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
