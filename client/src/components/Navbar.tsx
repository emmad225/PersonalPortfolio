import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "PROJECTS", path: "/projects" },
    { label: "RESUME", path: "/resume" },
    { label: "CONTACT", path: "/contact" },
    { label: "ABOUT", path: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-accent text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={cn(
                    "relative py-5 px-1 hover:text-primary transition group",
                    isActive(link.path) ? "text-primary" : "text-neutral-800"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-4 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300",
                      isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  ></span>
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-800 hover:text-primary transition-colors"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 font-accent">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  onClick={handleLinkClick}
                  className={cn(
                    "block px-3 py-2 text-base hover:text-primary hover:bg-neutral-100 rounded-md",
                    isActive(link.path) ? "text-primary" : "text-neutral-800"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
