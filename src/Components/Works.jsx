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
        y: -30,
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
        y: -30,
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
    <div className=" w-full px-16 overflow-y-hidden overflow-x-hidden">
      <img src={pp} className="h-10 mt-32" />
      <div className="flex flex-row mb-32 ">
        <div className="w-[50%]">
          <div id="heading" className=" font-dm text-4xl mt-10">
            InTour
          </div>
          <div className=" font-monster text-3xl mb-10 mt-10">
            InTour is a modern mobile app with a captivating and intuitive
            interface, redefining travel planning. Explore a vast database of
            tourist agencies, detailed destination info, and interactive maps.
            Personalize trips with robust filters, read reviews, and join a
            community of travel enthusiasts. Embrace style and functionality for
            seamless vacation curation.
          </div>
        </div>
        <img src={plus} className="w-[5rem] " id="plus" />
        <div className="w-[50%] flex flex-row">
          <img src={in1} id="in1" className="h-96 " />
          <img src={in2} id="in2" className="h-96 " />
          <img src={in3} id="in3" className="h-96 " />
        </div>
      </div>
      {/* Second */}
      <div className="flex flex-row mb-20">
        {" "}
        <div className="w-[50%] flex flex-col justify-center">
          <img src={gall1} className="w-[28rem] mb-2 rounded-3xl " />
          <div className="relative">
            <img
              id="XX2"
              src={XX}
              alt="somke"
              className="absolute -z-10 top-32 h-20  ml-[10%]  "
            />
            <img
              src={gall2}
              id="gall"
              className="w-[28rem] mb-2 ml-44 rounded-3xl"
            />
          </div>

          <img src={gall3} className="w-[28rem] rounded-3xl" />
        </div>
        <div className="w-[50%] flex flex-col justify-center">
          <div id="heading" className=" font-dm text-4xl mt-10 text-right">
            Gallery
          </div>
          <div className=" font-monster text-3xl  mt-10 text-right mb-20">
            This MERN stack gallery web application enables users to register
            and store their priceless photos. Users can share photographs via
            their username with other users and erase any unwanted images from
            their device using this programme.
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="flex flex-row mb-32 ">
        <div className="w-[50%]">
          <div
            id="heading"
            className=" font-dm flex flex-col justify-center mb-10 text-4xl mt-10"
          >
            ATG Hotels
          </div>
          <div className=" font-monster text-3xl mt-10">
            This case study about the hotel booking app is quite simple and a
            fascinating task. This app is for customers who want to book hotels
            in their specific areas by knowing each and every detail about the
            hotel.
          </div>
          <img src={circ} className="w-[5rem] " />
        </div>

        <div className="w-[50%] mt-20 flex flex-row">
          <img src={hot1} id="hot1" className="h-96 " />
          <img src={hot2} id="hot2" className="h-96 " />
          <img src={hot3} id="hot3" className="h-96 " />
        </div>
      </div>
    </div>
  );
};

export default Works;
