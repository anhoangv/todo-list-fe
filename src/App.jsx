import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";

function App() {
   const [darkMode, setDarkMode] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: "50%", y: "50%" });

  // Handler for toggling dark mode with circle animation
  const handleToggleDarkMode = (e) => {
    // Get the button position for the circle center
    const rect = e?.target?.getBoundingClientRect();
    if (rect) {
      setCirclePos({
        x: `${rect.left + rect.width / 2 - window.scrollX}px`,
        y: `${rect.top + rect.height / 2 - window.scrollY}px`,
      });
    } else {
      setCirclePos({ x: "50%", y: "50%" });
    }
    setAnimating(true);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setAnimating(false);
    }, 700); // Match animation duration
  };
  //  dark:bg-[linear-gradient(100deg,rgb(87,86,86),rgb(6,46,63))]
  // bg-[linear-gradient(0deg,rgba(45,172,239,1)_40%,rgba(88,112,246,1)_85%)]
  return (
    <Router>
      <div
        className={`relative flex flex-col h-screen w-screen overflow-hidden
          transition-colors duration-700 ease-in-out 
          ${
            darkMode
              ? "bg-[linear-gradient(100deg,rgb(87,86,86),rgb(6,46,63))]"
              : "bg-[linear-gradient(0deg,rgba(45,172,239,1)_40%,rgba(88,112,246,1)_85%)]"
          }`}
      >
        {/* Circle overlay for transition */}
        {animating && (
          <span
            className={`circle-reveal fixed z-0 pointer-events-none`}
            style={{
              left: 0,
              top: 0,
              "--circle-x": circlePos.x,
              "--circle-y": circlePos.y,
              "--circle-bg": darkMode
                ? "linear-gradient(0deg,rgba(45,172,239,1) 40%,rgba(88,112,246,1) 85%)"
                : "linear-gradient(100deg,rgb(87,86,86),rgb(6,46,63))",
            }}
          />
        )}
        <Navbar darkMode={darkMode} setDarkMode={handleToggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
