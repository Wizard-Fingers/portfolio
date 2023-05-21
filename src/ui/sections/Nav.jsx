import Button from "../components/button";
import { FiHome, FiInfo, FiCode, FiMessageSquare } from "react-icons/fi";
const Nav = () => {
  return (
    <>
      <nav className=" mt-[10rem] mr-4 flex flex-col justify-evenly w-[3.5rem] h-[15.5rem] bg-slate-900 p- ring-2 ring-gray-500 hover:ring-white rounded-full  transition delay-50">
        <div className=" flex justify-center px-2">
          <Button isSmall={true}>
            <FiHome />
          </Button>
        </div>

        <div className=" flex justify-center px-2">
          <Button isSmall={true}>
            <FiInfo />
          </Button>
        </div>

        <div className=" flex justify-center px-2">
          <Button isSmall={true}>
            <FiCode />
          </Button>
        </div>

        <div className=" flex justify-center px-2">
          <Button isSmall={true}>
            <FiMessageSquare />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
