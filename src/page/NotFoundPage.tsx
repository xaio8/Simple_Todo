import { Ghost, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Ghost size={48} className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          <Home size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
