import Home from "./Components/Home";
import Quote from "./Components/Quote";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Homev2 from "./Components/Homev2";
import Intro from "./Components/Intro/Intro";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute z-10 overflow-x-hidden">
          <Intro />
        </div>
        <div className="overflow-x-hidden">
          <Homev2 />
          {/* <Home /> */}
          <Quote />
          <Works />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
