"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/work" },
  { name: "Challenges & Learnings", path: "/challenges" },
  { name: "Future plans", path: "/plans" },
  { name: "Resume", path: "/cv" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full flex justify-center mt-4 md:mt-6 px-4">
      <nav className="w-full max-w-5xl bg-white/10 backdrop-blur-sm text-white shadow-md px-4 py-2 rounded-full z-30">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-x-6 text-xs lg:text-sm">
          {links.map((link, index) => (
            <Link href={link.path} key={index}>
              <span
                className={`cursor-pointer font-medium transition-all ${
                  pathname === link.path
                    ? "text-accent underline underline-offset-4"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <h1 className="text-sm font-semibold">Menu</h1>
          <button onClick={toggleMenu} className="text-xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-y-3 bg-white/10 backdrop-blur-sm  transition-all duration-300">
            {links.map((link, index) => (
              <Link href={link.path} key={index}>
                <span
                  onClick={closeMenu}
                  className={`block font-medium text-sm ${
                    pathname === link.path
                      ? "text-accent underline underline-offset-4"
                      : "hover:text-accent"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
