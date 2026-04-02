import { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillMail,
  AiFillLock,
} from "react-icons/ai";
import ForgetPasswordModel from "../../model/ForgetPasswordModel";

// interface LoginFormProps {
//   onToggle: () => void;
// }

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgetModel, setForgetModel] = useState<boolean>(false);

  const loginHandler = () => {};

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md px-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Welcome Back
      </h1>

      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="you@example.com"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                ></path>
              </svg>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-2 text-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="••••••••"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-500 transition-colors"
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <button
            onClick={() => setForgetModel((prev) => !prev)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="my-6">
          <button
            onClick={loginHandler}
            className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Login
          </button>
        </div>

        {/* <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
          <button onClick={onToggle} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            Sign Up
          </button>
        </div> */}
      </div>
      {forgetModel && <ForgetPasswordModel onClose={() => setForgetModel(false)} />}
    </div>
  );
};

export default LoginForm;
