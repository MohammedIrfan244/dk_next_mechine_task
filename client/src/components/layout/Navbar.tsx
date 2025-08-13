import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = activeLink === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`relative text-sm font-medium cursor-pointer tracking-wide transition-all duration-300 ${isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-300"
                    }`}
                >
                  <span className="relative inline-block">
                    {link.name}
                  </span>

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                  )}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full transition-all duration-300 ease-in-out group-hover:w-full opacity-70"></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
