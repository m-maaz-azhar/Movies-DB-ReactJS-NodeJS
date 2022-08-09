import { useEffect } from "react";
import AOS from "aos";
import Navigation from "./Routes/Navigation";

import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
