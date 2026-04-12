import { useEffect, useState } from "react";
import SystemMapVisualization from "./SystemMapVisualization";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Systems from "./System";
import Contact from "./Contact";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const toggleTheme = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.setAttribute(
        "data-theme",
        next ? "dark" : "light",
      );
      return next;
    });
  };

  return (
    <div style={{ background: "var(--bg)" }}>
      <NavBar dark={dark} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <SystemMapVisualization />
        </div>
        <Hero />
      </div>

      {/* About Section */}
      <About />
      <Systems />
      <Contact />
    </div>
  );
}