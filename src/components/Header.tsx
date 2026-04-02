import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    if (document.documentElement.classList.contains("dark")) {
      return "dark";
    }
    return "light";
  });

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-indigo-600 dark:bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* header */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight playwrite-font dark:text-green-500">
            Todo App
          </h1>
        </div>

        {/* change dark/light mode btn */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="px-2 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors dark:text-green-400"
          >
            {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
          </button>
          <button
            onClick={() => navigate("/auth/login")}
            className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors dark:text-green-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
