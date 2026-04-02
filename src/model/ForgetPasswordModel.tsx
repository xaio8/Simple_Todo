import { AlertTriangle, X } from "lucide-react";

type Props = {
  onClose: () => void;
};

const ForgetPasswordModel = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertTriangle size={20} />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Forgot Password
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        {/* Content */}
        <div className="p-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comming Soon...
          </p>
        </div>

        {/* Actions */}
        {/* <div className="flex gap-3 p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(todo.id)}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 dark:hover:bg-red-500 transition-colors"
          >
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ForgetPasswordModel;
