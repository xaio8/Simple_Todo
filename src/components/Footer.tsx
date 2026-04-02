import { ClipboardCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-gray-300 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">
                <ClipboardCheck size={35} />
              </span>
              <h3 className="text-lg font-bold playwrite-font text-white">
                Todo App
              </h3>
            </div>
            <p className="text-sm text-white">
              Organize your tasks, boost your productivity. Simple, fast,
              effective.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tasks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Todo App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
