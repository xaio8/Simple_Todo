import { ClipboardCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-600 dark:bg-gray-900 text-gray-100 transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ClipboardCheck
                size={35}
                className="text-white dark:text-blue-400"
              />
              <h3 className="text-lg font-bold text-white">Todo App</h3>
            </div>
            <p className="text-sm text-gray-100 dark:text-gray-400">
              Organize your tasks, boost your productivity. Simple, fast,
              effective.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Tasks", "Archive", "Settings"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-100 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-100 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-100 dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Todo App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
