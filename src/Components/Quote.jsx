import React, { useEffect } from "react";
import strip from "./../assets/strip.svg";
import XX from "./../assets/XX.svg";
import circ from "./../assets/circ.svg";
import { ScrollTrigger } from "gsap/all";

import gsap from "gsap";

const Quote = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#sntn",

      {
        y: 100,
      },
      {
        y: -100,
        scrollTrigger: {
          trigger: "#sntn",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#circ",

      {
        y: 50,
      },
      {
        y: -100,
        scrollTrigger: {
          trigger: "#circ",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#strip",

      {
        y: -100,
      },
      {
        y: 100,
        scrollTrigger: {
          trigger: "#strip",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="lg:px-16 md:px-10 h-screen  w-full flex-col md:-mt-52 xl:mt-0 flex justify justify-center ">
      <div className="relative">
        <img
          src={strip}
          alt="somke"
          className=" xl:h-60 h-32 lg:ml-[70%] ml-[60%] md:ml-[60%] "
        />
        <img
          src={circ}
          id="circ"
          className="absolute xl:h-20 h-10 bottom-10 left-[85%]"
        />
      </div>
      <div
        id="sntn"
        className=" text-center font-archivo text:lg lg:text-4xl  xl:text-5xl flex justify-center"
      >
        <div className="w-4/5">
          “Simplicity will stand out, while complexity will get lost in the
          crowd.”
        </div>
      </div>
      <div id="strip">
        <img src={XX} alt="somke" className=" h-20  ml-[10%]  " />
      </div>
    </div>
  );
};

export default Quote;
