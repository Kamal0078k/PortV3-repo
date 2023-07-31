import { useEffect } from "react";
import kml from "./../assets/kml.svg";
import BUI from "./../assets/BUI.svg";
import des from "./../assets/des.svg";
import { ScrollTrigger } from "gsap/all";

import gsap from "gsap";

const Home = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.fromTo(
  //     "#header",
  //     {
  //       y: -100,
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       duration: 1,
  //     }
  //   );
  //   gsap.fromTo(
  //     "#hello",
  //     {
  //       y: 500,
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       delay: 1,
  //       duration: 1,
  //     }
  //   );
  //   gsap.fromTo(
  //     "#hell",
  //     {
  //       y: 500,
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       delay: 1.2,
  //       duration: 1,
  //     }
  //   );
  //   gsap.fromTo(
  //     "#hero",
  //     {
  //       y: -100,
  //     },
  //     {
  //       y: 0,
  //       ease: "expo.out",
  //       scrollTrigger: {
  //         trigger: "#hero",
  //         start: "top 100%",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);
  // return (
  //   <div className="bg-white h-screen  ">
  //     {/* Header */}
  //     <div
  //       id="header"
  //       className="  w-screen h-24 flex animation-dropdown flex-row justify-between items-center sm:px-5 lg:px-16 md:px-10 "
  //     >
  //       <img src={kml} alt="KML" className="h-10" />
  //       <div className="flex flex-row font-pops">
  //         <div className="cursor-pointer">HOME</div>
  //         <div className="ml-10 cursor-pointer">WORKS</div>
  //         <div className="ml-10 cursor-pointer">RESUME</div>
  //         <div className=" ml-10 cursor-pointer">CONTACT</div>
  //       </div>
  //     </div>
  //     {/* Hero Section*/}
  //     <div
  //       id="hero"
  //       className="h-4/5 overflow-y-hidden lg:px-16 md:px-10  mt-20"
  //     >
  //       <div className="clip-your-needful-style ">
  //         <img src={des} alt="somek" id="hello" />
  //       </div>
  //       <div className="clip-your-needful-style mt-10">
  //         <img src={BUI} alt="somek" id="hell" />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
