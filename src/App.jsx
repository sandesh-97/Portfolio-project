import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
