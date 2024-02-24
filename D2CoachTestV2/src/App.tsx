import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/Images/Tricorn_White.png";


import LoadoutBuilder from "./pages/LoadoutBuilder";
import Vault from "./pages/Vault";
import getToken from "./apiRequests/getToken";
import { globalData } from "./global";
import Debugger from "./Debugger";





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
        <Route path="/LoadoutBuilder" element={<LoadoutBuilder />} />
        <Route path="/Vault" element={<Vault />} />
        <Route path="/Debugger" element={<Debugger />} />
      </Routes>
    </Router>
  );
}

export default App;
