import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/Images/Tricorn_White.png";
import './styles/App.css';

import LoadoutBuilder from "./pages/LoadoutBuilder";
import Vault from "./pages/Vault";
import Debugger from "./pages/Debugger";

function App() {
  let items = ["Loadout Builder", "Vault"];
  let links = ["/LoadoutBuilder", "/Vault"];

  return (
    <Router>
      <NavBar
        brandName="D2Coach"
        imageSrcPath={imagePath}
        navItems={items}
        navLinks={links}
      />

      <Routes>
        <Route path="/" element={<LoadoutBuilder />} />
        <Route path="/LoadoutBuilder" element={<LoadoutBuilder />} />
        <Route path="/Vault" element={<Vault />} />
      </Routes>
    </Router>
  );
}

export default App;
