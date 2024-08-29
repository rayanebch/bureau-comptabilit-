import { navLinks } from "../constants";
import logo_transparent from "../assets/images/logo_transparent.png";

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10"> {/* Positionnement absolu */}
      <nav className="flex justify-between items-center max-container px-4 md:px-10"> 
        <a href="#accueil">
          <img
            src={logo_transparent}
            alt="logo"
            className="w-[100px] h-[50px] sm:w-[150px] sm:h-[75px] md:w-[200px] md:h-[100px] transition-all ml-4"
          />
        </a>
        <ul className="flex flex-wrap gap-4 sm:gap-8 md:gap-16 px-2 py-4 text-white font-bold">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-xs sm:text-sm md:text-lg font-bold font-poppins hover:text-bluebg hover:underline hover:text-md">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
