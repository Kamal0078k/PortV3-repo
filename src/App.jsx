import Home from "./Components/Home";
import Quote from "./Components/Quote";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Home />
        <Quote />
        <Works />
        <Contact />
      </div>
    </>
  );
}

export default App;
