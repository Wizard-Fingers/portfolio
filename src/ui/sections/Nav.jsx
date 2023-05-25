import Button from "../components/button";
import { FiHome, FiInfo, FiCode, FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
const Nav = () => {
  const [hoveredButton, setHoveredButton] = useState("");

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton("");
  };

  return (
    <>
      <div className="flex">
        <nav className="flex flex-col justify-evenly w-[3.5rem] h-[15.5rem] bg-slate-900 ring-2 ring-gray-500 hover:ring-white rounded-full lg:m-0 m-4 transition delay-50">
          <div
            className="flex justify-center items-center"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <Button isSmall={true}>
              <FiHome />
            </Button>
          </div>

          <div
            className="flex justify-center items-center"
            onMouseEnter={() => handleMouseEnter("reviews")}
            onMouseLeave={handleMouseLeave}
          >
            <Button isSmall={true}>
              <FiMessageSquare />
            </Button>
          </div>

          <div
            className="flex justify-center items-center"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Button isSmall={true}>
              <FiInfo />
            </Button>
          </div>

          <div
            className="flex justify-center items-center"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <Button isSmall={true}>
              <FiCode />
            </Button>
          </div>
        </nav>

        <div className="lg:flex flex-col justify-center hidden text-white heading text-xl ml-4">
          {hoveredButton === "home" && (
            <span className="-translate-y-[5.4rem]">Home</span>
          )}
          {hoveredButton === "reviews" && (
            <span className="-translate-y-[1.8rem]">Reviews</span>
          )}
          {hoveredButton === "about" && (
            <span className="translate-y-[1.8rem]">About</span>
          )}
          {hoveredButton === "projects" && (
            <span className="translate-y-[5.3rem]">Projects</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
