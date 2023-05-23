import brain from "./assets/images/brain.png";
import Hero from "./ui/sections/Hero.jsx";
import Nav from "./ui/sections/Nav.jsx";
import Layout from "./ui/sections/Layout.jsx";

function App() {
  return (
    <>
      <img
        src={brain}
        alt="a hand drawn picture of a brain as a background image"
        className="hidden absolute top-0 right-0 -translate-y-8 object-fit rotate-12 xl:flex "
      />
      <div className="max-w-[1440px] mx-auto">
        {/* On "lg" and up devices */}
        <div className="-mt-[4rem] hidden md:flex md:justify-between fixed w-full">
          <Hero />
          <div className="lg:fixed mr-4 ml-4 lg:mt-[35rem] ">
            <Nav />
          </div>
        </div>

        {/* On "md" and "sm" devices */}
        <div className="md:hidden">
          <div className="flex justify-between">
            <Hero />
            <div className="mt-4 mx-4">
              <Nav />
            </div>
          </div>
        </div>

        {/* Layout component */}
        <div className="md:ml-[19.5rem] md:mr-[4rem]">
          <Layout />
        </div>
      </div>
    </>
  );
}

export default App;
