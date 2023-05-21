import Hero from "./ui/sections/Hero.jsx";
import Nav from "./ui/sections/Nav.jsx";
import Introduction from "./ui/sections/Introduction.jsx";

function App() {
  return (
    <div>
      <div className="w-full flex justify-center lg:justify-between fixed">
        <Hero />
        <div className="lg:hidden">
          <Introduction />
        </div>
        <Nav />
      </div>

      <div className="ml-[12rem] hidden lg:flex lg:justify-center">
        <div className="w-[35rem]">
          <Introduction />
        </div>
      </div>
    </div>
  );
}

export default App;
