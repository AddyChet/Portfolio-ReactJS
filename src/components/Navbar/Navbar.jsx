import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isSectionActive, setIsSectionActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSection = (menuId) => {
    const section = document.getElementById(menuId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsSectionActive((prev) => (prev === menuId ? "" : menuId));
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    {id : "contact", label : "Contact"}
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-transparent/90  backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#4286f4]">&lt;</span>
          <span className="text-white">Adarsh</span>
          <span className="text-[#4286f4]">/</span>
          <span className="text-white">Bhandari</span>
          <span className="text-[#4286f4]">&gt;</span>
        </div>

        {/* menu items */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#4286f4] ${
                isSectionActive === item.id ? "text-[#4286f4]" : ""
              }`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSection(item.id);
                }}
                className="cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/addychet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4286f4]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/adchet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4286f4]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#4286f4] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4286f4] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  isSectionActive === item.id ? "text-[#4286f4]" : ""
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #a1cfff, #4286f4)",
                  boxShadow:
                    "0 0 2px #a1cfff, 0 0 2px #8245ec, 0 0 10px #a1cfff",
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
