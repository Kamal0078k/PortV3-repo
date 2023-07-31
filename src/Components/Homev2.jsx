import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Quote from "./Quote";
import Works from "./Works";
import Contact from "./Contact";
import fsd from "./../assets/Home/FSD.svg";
import gd from "./../assets/Home/GD.svg";
import ui from "./../assets/Home/UI.svg";
import sd from "./../assets/Home/SD.svg";
import kl from "./../assets/Home/KL.svg";

const Homev2 = () => {
  const quoteRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#header",
      {
        y: -50,
      },
      {
        y: 0,
        ease: "expo.out",
        duration: 1,
      }
    );

    gsap.fromTo(
      "#fsd",
      {
        y: 100,
      },
      {
        y: 0,
        ease: "expo.out",
        delay: 2.8,
        duration: 1.5,
      }
    );

    gsap.fromTo(
      "#gd",
      {
        y: 100,
      },
      {
        y: 0,
        ease: "expo.out",
        delay: 3,
        duration: 1.5,
      }
    );

    gsap.fromTo(
      "#ui",
      {
        y: 100,
      },
      {
        y: 0,
        ease: "expo.out",
        delay: 3.2,
        duration: 1.5,
      }
    );

    gsap.fromTo(
      "#sd",
      {
        y: 100,
      },
      {
        y: 0,
        ease: "expo.out",
        delay: 3.5,
        duration: 1.5,
      }
    );
    gsap.fromTo(
      "#kl",
      {
        y: 100,
      },
      {
        y: 0,
        ease: "expo.out",
        delay: 3.3,
        duration: 1.5,
      }
    );
  }, []);

  const projects = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contacts = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <div className="h-screen flex flex-col overflow-x-hidden overflow-y-hidden">
        <div className="px-16 h-20 flex flex-row items-center" id="header">
          <div className="flex-1">PORTFOLIO</div>
          <div className=" flex  flex-row w-64 justify-between items-center">
            <div className="cursor-pointer hover:text-gray-500">HOME</div>
            <div
              className="cursor-pointer hover:text-gray-500"
              onClick={projects}
            >
              PROJECTS
            </div>
            <div
              className="cursor-pointer hover:text-gray-500"
              onClick={contacts}
            >
              CONTACTS
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10">
          <div className=" mt-3 w-full clip-your-needful-style">
            <img
              src={fsd}
              id="fsd"
              alt="fsd"
              className="xl:h-20 lg:h-20 m-auto"
            />
          </div>
          <div className="clip-your-needful-style w-full mt-3 xl:h-28 lg:h-24 flex justify-center items-center bg-black">
            <img src={gd} alt="gd" id="gd" className="xl:h-20 lg:h-20 m-auto" />
          </div>
          <div className="w-full mt-3 clip-your-needful-style ">
            <img src={ui} alt="ui" id="ui" className="xl:h-20 m-auto lg:h-20" />
          </div>
          <div className="w-full xl:h-28 flex justify-center lg:h-24 clip-your-needful-style items-center h-20 mt-3 bg-black">
            <img src={sd} alt="sd" id="sd" className="xl:h-20 m-auto lg:h-20" />
          </div>
          <div className=" flex h-24 mt-5 flex-col justify-center items-center font-pops text-2xl clip-your-needful-style">
            <div>THEY CALL ME</div>
            <img src={kl} id="kl" alt="kl" className="h-8 ml-2" />
          </div>
        </div>
      </div>
      <div ref={quoteRef}>
        <Quote />
      </div>
      <div ref={workRef}>
        <Works />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Homev2;
