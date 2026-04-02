import { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import SignUpForm from "../../components/auth/SignUpForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="w-full min-h-screen dark:bg-gray-900 flex flex-col items-center justify-center">
      {isLogin ? <LoginForm /> : <SignUpForm />}

      <p className="mt-5 text-sm text-gray-700 dark:text-white">
        {isLogin ? (
          <>
            No account?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Please sign up
            </span>
          </>
        ) : (
          <>
            Have an account?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Please login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthPage;
