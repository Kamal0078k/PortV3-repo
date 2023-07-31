import pp from "./../assets/pp.svg";
import plus from "./../assets/plus.svg";
import React, { useEffect } from "react";
import in1 from "./../assets/Intour/in1.png";
import in2 from "./../assets/Intour/in2.png";
import in3 from "./../assets/Intour/in3.png";
import XX from "./../assets/XX.svg";
import circ from "./../assets/circ.svg";
import gall1 from "./../assets/gallery/gall1.png";
import gall2 from "./../assets/gallery/gall2.png";
import gall3 from "./../assets/gallery/gall3.png";
import { ScrollTrigger } from "gsap/all";
import hot1 from "./../assets/Hotel/hot1.png";
import hot2 from "./../assets/Hotel/hot2.png";
import hot3 from "./../assets/Hotel/hot3.png";
import gsap from "gsap";

const Works = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#in1",

      {
        y: 90,
      },
      {
        y: -20,
        scrollTrigger: {
          trigger: "#in1",
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#in2",

      {
        y: -100,
      },
      {
        y: 100,
        scrollTrigger: {
          trigger: "#in2",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#gall",

      {
        x: 50,
      },
      {
        x: -50,
        scrollTrigger: {
          trigger: "#gall",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#plus",

      {
        y: -100,
      },
      {
        y: 30,
        scrollTrigger: {
          trigger: "#plus",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#in3",

      {
        y: 100,
      },
      {
        y: -30,
        scrollTrigger: {
          trigger: "#in3",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#hot1",

      {
        y: 100,
      },
      {
        y: -100,
        scrollTrigger: {
          trigger: "#hot1",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#hot3",

      {
        y: 50,
      },
      {
        y: -50,
        scrollTrigger: {
          trigger: "#hot3",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#XX2",

      {
        y: 100,
      },
      {
        y: -30,
        scrollTrigger: {
          trigger: "#XX2",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#heading",

      {
        y: -20,
      },
      {
        y: 20,
        scrollTrigger: {
          trigger: "#heading",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className=" w-full xl:px-16 px-5 overflow-y-hidden overflow-x-hidden">
      <img src={pp} className=" h-10 mt-32" />
      <div className="flex sm:flex-row  flex-col justify-center sm:justify-left items-center mb-32 ">
        <div className=" w-[100%] xl:w-[40%]">
          <div id="heading" className=" font-dm text-4xl mt-10">
            InTour
          </div>
          <div className=" lg:text-xl font-monster xl:text-3xl xl:mb-10 mt-10">
            InTour is a modern mobile app with a captivating and intuitive
            interface, redefining travel planning. Explore a vast database of
            tourist agencies, detailed destination info, and interactive maps.
            Personalize trips with robust filters, read reviews, and join a
            community of travel enthusiasts. Embrace style and functionality for
            seamless vacation curation.
          </div>
        </div>
        <img src={plus} className="xl:w-[5rem] w-[2rem] " id="plus" />
        <div className="xl:w-[50%] w-[100%] flex flex-row justify-left">
          <img src={in1} id="in1" className="lg:h-80 xl:h-96 md:h-52 h-44" />
          <img
            src={in2}
            id="in2"
            className="xl:h-96 lg:h-80 lg:-ml-10 md:h-52 h-44"
          />
          <img
            src={in3}
            id="in3"
            className="xl:h-96 lg:h-80 lg:-ml-10 md:h-52 h-44"
          />
        </div>
      </div>
      {/* Second */}
      <div className="flex flex-row justify-between mb-20">
        {" "}
        <div className="hidden sm:w-[50%] sm:flex sm:flex-col sm:justify-center">
          <img
            src={gall1}
            className="xl:w-[28rem]  lg:w-[24rem] mb-2 md:w-[15rem] rounded-3xl "
          />
          <div className="relative">
            <img
              id="XX2"
              src={XX}
              alt="somke"
              className="absolute lg:w-[24rem] lg:-ml-[20%] -z-10 top-32 h-20  xl:ml-[10%]  "
            />
            <img
              src={gall2}
              id="gall"
              className="xl:w-[28rem] md:w-[15rem] lg:ml-32 md:ml-20 lg:w-[24rem] mb-2 ml-44 rounded-3xl"
            />
          </div>

          <img
            src={gall3}
            className="w-[28rem] md:w-[15rem] lg:w-[24rem] rounded-3xl"
          />
        </div>
        <div className="xl:w-[40%] w-[100%] flex flex-col justify-center">
          <div id="heading" className=" font-dm text-4xl mt-10 text-right">
            Gallery
          </div>
          <div className=" font-monster lg:text-xl  xl:text-3xl  mt-10 text-right  xl:mb-20">
            This MERN stack gallery web application enables users to register
            and store their priceless photos. Users can share photographs via
            their username with other users and erase any unwanted images from
            their device using this programme.
          </div>
        </div>
      </div>
      <div className="w-[50%] sm:hidden flex flex-col justify-center">
        <img
          src={gall1}
          className="xl:w-[28rem]  lg:w-[24rem] mb-2 md:w-[15rem] rounded-3xl "
        />
        <div className="relative">
          <img
            id="XX2"
            src={XX}
            alt="somke"
            className="absolute lg:w-[24rem] lg:-ml-[20%] -z-10 top-32 xl:h-20 h-5 xl:ml-[10%]  "
          />
          <img
            src={gall2}
            id="gall"
            className="xl:w-[28rem] md:w-[15rem] lg:ml-32 md:ml-20 lg:w-[24rem] mb-2 ml-44 rounded-3xl"
          />
        </div>

        <img
          src={gall3}
          className="w-[28rem] md:w-[15rem] lg:w-[24rem] rounded-3xl"
        />
      </div>
      {/* Third */}
      <div className="sm:flex sm:flex-row sm:mb-10 flex flex-col">
        <div className="sm:w-[50%] w-[100%]">
          <div
            id="heading"
            className=" font-dm flex flex-col justify-center mb-10 text-4xl mt-10"
          >
            ATG Hotels
          </div>
          <div className=" font-monster xl:text-3xl lg:text-xl mt-10">
            This case study about the hotel booking app is quite simple and a
            fascinating task. This app is for customers who want to book hotels
            in their specific areas by knowing each and every detail about the
            hotel.
          </div>
          <img src={circ} className="w-[5rem] " />
        </div>

        <div className="w-[50%] mt-10 flex flex-row">
          <img src={hot1} id="hot1" className="xl:h-96 lg:h-80 md:h-52 h-44" />
          <img
            src={hot2}
            id="hot2"
            className="xl:h-96 lg:h-80 lg:-ml-8 md:h-52 h-44"
          />
          <img
            src={hot3}
            id="hot3"
            className="xl:h-96 lg:h-80 lg:-ml-8 md:h-52 h-44"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
