import React, { useEffect } from "react";
import strip from "./../assets/strip.svg";
import video from "./../assets/video/videoplayback.webm";
import { ScrollTrigger } from "gsap/all";
import circ from "./../assets/circ.svg";
import XX from "./../assets/XX.svg";
import link from "./../assets/link.svg";
import git from "./../assets/git.svg";
import insta from "./../assets/insta.svg";

import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#strip1",

      {
        y: 0,
      },
      {
        y: -200,
        scrollTrigger: {
          trigger: "#strip1",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#circ1",

      {
        y: 0,
      },
      {
        y: -200,
        scrollTrigger: {
          trigger: "#circ1",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#XX1",

      {
        y: 0,
      },
      {
        y: 100,
        scrollTrigger: {
          trigger: "#XX1",
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative h-96  w-full my-20 md:mt-32 md:mb-5 xl:mb-24">
      <img
        src={strip}
        id="strip1"
        alt="somke"
        className=" h-60 ml-[70%] absolute"
      />
      <img src={circ} id="circ1" className="absolute h-20  left-[80%]" />
      <a href="https://github.com/Kamal0078k" target="_blank" rel="noreferrer">
        <img
          src={git}
          className="left-20 xl:top-24 md:h-8 z-10 absolute h-4 lg:h-20"
        />
      </a>
      <a
        href="https://www.instagram.com/kamal_arukala/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={insta}
          className="z-10 left-20 xl:top-4 md:h-8 absolute h-4 lg:h-20"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kamal-arukala-08534b173/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={link}
          className="z-10 left-20 xl:top-44 md:h-8  absolute h-4 lg:h-20"
        />
      </a>
      <div className="text-white absolute xl:top-[20rem] xl:left-[80%] z-10 md:top-44 top-80 left-[60%]">
        <div>Mail : saikamal0078@gmail.com</div>
        <div>+91 8374743555</div>
      </div>
      <video
        src={video}
        autoPlay
        muted
        loop
        type="video/webm"
        className="xl:px-16 px-5  md:h-[60%] xl:h-[100%] w-[100%]  object-cover rounded-md absolute"
      />
      <img
        src={XX}
        id="XX1"
        alt="somke"
        className=" absolute lg:h-20 h-10 top-[21rem] md:top-[9rem] xl:md:top-[20rem] ml-[10%]  "
      />
    </div>
  );
};

export default Contact;
