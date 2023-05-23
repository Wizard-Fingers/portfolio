import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiFileText,
} from "react-icons/fi";
import Button from "../components/button";
import hero1 from "../../assets/images/hero-1.png";
import hero2 from "../../assets/images/hero-2.png";
import pointer from "../../assets/images/pointer-1.png";
import cv from "../../assets/pdf/CV.pdf";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState(hero1);

  const handleMouseEnter = useCallback(() => {
    setImageSrc(hero2);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setImageSrc(hero1);
  }, []);

  const openLinkInNewTab = (url) => {
    window.open(url);
  };

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = cv;
    anchor.download = "CV.pdf";
    anchor.click();
  };

  return (
    <div className="flex m-2 mt-0">
      <section
        className="m-2 p-6 ring-2 ring-gray-500 hover:ring-white hover:shadow-2xl rounded-3xl max-w-[17rem] h-[30.8rem] transition delay-50 text-white hover:text-white bg-gray-900"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-around translate-x-3">
          <header className="pl-5 mt-[-10px]">
            <h1>
              <span className="written text-7xl font-medium accent">Art</span>{" "}
              <span className="heading text-4xl">Beckett</span>
            </h1>
          </header>
          <div className="text-right pr-4 mt-[-px] -translate-x-8">
            <h2 className="heading w-[10rem]">
              Frontend <br /> Web Developer
            </h2>
            <div className="translate-y-5">
              <Button isSmall={true} onClick={handleDownload}>
                <FiFileText />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <div className="bg-slate-800 rounded-full ring-2 ring-slate-900 ring-offset-2">
            <img
              src={imageSrc}
              alt="Art Beckett"
              className="w-[13rem] h-[13rem] object-cover rounded-full"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-[1.3rem]  mb-2 heading">Based in Swindon, UK</p>
          <p className="text-[0.6rem]">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="flex justify-evenly my-6">
          <Button
            isSmall={true}
            target="_blank"
            onClick={() =>
              openLinkInNewTab("https://github.com/Wizard-Fingers")
            }
          >
            <FiGithub />
          </Button>
          <Button
            isSmall={true}
            target="_blank"
            onClick={() =>
              openLinkInNewTab(
                "https://www.linkedin.com/in/arthur-beckett-3b19b7209/"
              )
            }
          >
            <FiLinkedin />
          </Button>
          <Button
            isSmall={true}
            onClick={() => openLinkInNewTab("mailto:art.b.beckett@gmail.com")}
          >
            <FiMail />
          </Button>
          <Button
            isSmall={true}
            onClick={() => openLinkInNewTab("tel:+447925578819")}
          >
            <FiPhone />
          </Button>
        </div>
      </section>
      <img
        src={pointer}
        alt="pointer"
        className="w-[3rem] h-[3rem] -translate-x-2 -translate-y-4"
      />
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
