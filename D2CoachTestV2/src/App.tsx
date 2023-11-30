import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/Images/Tricorn_White.png";

function App() {
  let items = ["Home", "Loadout Builder", "Vault", "Log In"]
  return (
    <div>
      <NavBar 
      brandName="D2Coach" 
      imageSrcPath={imagePath}
      navItems={items}/>
    </div>
  );
}

export default App;
