import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    return saved ?? "light";
  });

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* header */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight playwrite-font">
            Todo App
          </h1>
        </div>

        {/* change dark/light mode btn */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-2 py-2 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
