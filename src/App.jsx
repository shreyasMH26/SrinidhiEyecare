import "./App.css";
import { useState } from "react";


import logo from "./logo.png";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";
import LensCollection from "./pages/lens collection/LensCollection";
import SingleVision from "./pages/lens collection/SingleVision";
import Bifocal from "./pages/lens collection/Bifocal";
import AntiGlare from "./pages/lens collection/AntiGlare";
import Photochromic from "./pages/lens collection/Photochromic";
import BlueCut from "./pages/lens collection/BlueCut";
import RayBan from "./pages/frame/RayBan";
import Fastrack from "./pages/frame/Fastrack";
import Vogue from "./pages/frame/Vogue";
import VincentChase from "./pages/frame/VincentChase";
import FrameCollection from "./pages/frame/frame collection ";

import {
  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);



  return (

    <BrowserRouter>




      <div className={darkMode ? "container dark" : "container light"}>

        {/* NAVBAR */}

        <div className="navbar">

          {/* LOGO */}

          <div className="logoBox">

            <img
              src={logo}
              alt="Logo"
              className="logo"
            />

            <span className="logoText">
              𝐒𝐫𝐢𝐧𝐢𝐝𝐡𝐢 𝐄𝐲𝐞 𝐂𝐚𝐫𝐞..

            </span>

          </div>

          {/* NAVIGATION */}

          <ul className={menuOpen ? "navLinks active" : "navLinks"}>


            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/doctors">Doctors</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/lenscollection">
                Lenses
              </Link>
            </li>
            <li>
              <Link to="/frames">
                Frames
              </Link>
            </li>

          </ul>
          <button
            className="themeBtn"
            onClick={() => setDarkMode(!darkMode)}

          >

            {darkMode ? "☀️ Light" : "🌙 Dark"} </button>



        </div>

        {/* ROUTES */}

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/services" element={<Services />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/lenscollection" element={<LensCollection />} />

          <Route path="/singlevision" element={<SingleVision />} />

          <Route path="/bifocal" element={<Bifocal />} />

          <Route path="/antiglare" element={<AntiGlare />} />

          <Route path="/photochromic" element={<Photochromic />} />

          <Route path="/bluecut" element={<BlueCut />} />

          <Route path="/rayban" element={<RayBan />} />
          <Route path="/fastrack" element={<Fastrack />} />
          <Route path="/vogue" element={<Vogue />} />
          <Route path="/vincentchase" element={<VincentChase />} />
          <Route
            path="/frames"
            element={<FrameCollection />}
          />


        </Routes>





      </div>
      <a
        href="https://wa.me/8762888866"
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"

      >

        <i className="fab fa-whatsapp"></i> </a>


      <Footer />

    </BrowserRouter>


  );
}

export default App;