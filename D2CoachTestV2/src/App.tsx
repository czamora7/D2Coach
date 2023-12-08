
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/Images/Tricorn_White.png";

import Home from './Home';
import LoadoutBuilder from "./LoadoutBuilder";
import Vault from "./Vault";
import Login from "./Login";

function App() {
  let items = ["Home", "Loadout Builder", "Vault", "Log In"]
  let links = ["/", "/LoadoutBuilder", "/Vault", "/Login"]
  return (
    <Router>
      <NavBar
        brandName="D2Coach"
        imageSrcPath={imagePath}
        navItems={items}
        navLinks={links} />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoadoutBuilder" element={<LoadoutBuilder />} />
      <Route path="/Vault" element={<Vault />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App;