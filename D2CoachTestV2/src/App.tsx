import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/Images/Tricorn_White.png";

import Home from "./Home";
import LoadoutBuilder from "./LoadoutBuilder";
import Vault from "./Vault";
import getToken from "./apiRequests/loginRequest";

declare global {
  interface Window {
    apiKey: string;
    loggedIn: boolean;
    loginCode: any;
    loginToken: any;
    clientId: string;
  }
}

function App() {
  let items = ["Home", "Loadout Builder", "Vault"];
  let links = ["/", "/LoadoutBuilder", "/Vault"];

  window.clientId = '45654';
  window.apiKey = "82a78bc74da1485dbded6f6f0333dd63";

    window.loginToken = getToken();

  return (
    <Router>
      <NavBar
        brandName="D2Coach"
        imageSrcPath={imagePath}
        navItems={items}
        navLinks={links}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoadoutBuilder" element={<LoadoutBuilder />} />
        <Route path="/Vault" element={<Vault />} />
      </Routes>
    </Router>
  );
}

export default App;
