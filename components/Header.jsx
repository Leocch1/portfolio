import Link from "next/link";
import Socials from "../components/Socials";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="relative z-30 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - aligned left */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            Leocchi<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Nav - centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Nav />
        </div>

        {/* Socials - aligned right */}
        <div className="flex items-center gap-x-4">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
