import { useEffect, useRef } from "react";
import Home from "./Components/Home";
import Quote from "./Components/Quote";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Homev2 from "./Components/Homev2";
import Intro from "./Components/Intro/Intro";

function App() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflowY = "hidden";
    const enableScrolling = () => {
      document.body.style.overflowY = "auto";
    };
    const timeout = setTimeout(enableScrolling, 3500);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeout);
    };
    //

    // // Enable scrolling after 3 seconds
    //

    //

    // // Clean up the timeout on unmount
    // return () => ;
  }, []);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute z-10 overflow-x-hidden">
          <Intro />
        </div>
        <div className="overflow-x-hidden">
          <Homev2 />
          {/* <Home /> */}
          {/* <Quote />
          <Works />
          <Contact /> */}
        </div>
      </div>
    </>
  );
}

export default App;
