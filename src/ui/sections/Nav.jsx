import Button from "../components/button";
import { FiHome, FiInfo, FiCode, FiMessageSquare } from "react-icons/fi";
const Nav = () => {
  return (
    <>
      <nav className=" flex flex-col justify-evenly w-[3.5rem] h-[15.5rem] bg-slate-900 ring-2 ring-gray-500 hover:ring-white rounded-full lg:m-0 m-4 transition delay-50">
        <div className=" flex justify-center">
          <Button isSmall={true}>
            <FiHome />
          </Button>
        </div>

        <div className=" flex justify-center ">
          <Button isSmall={true}>
            <FiMessageSquare />
          </Button>
        </div>

        <div className=" flex justify-center ">
          <Button isSmall={true}>
            <FiInfo />
          </Button>
        </div>

        <div className=" flex justify-center ">
          <Button isSmall={true}>
            <FiCode />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
