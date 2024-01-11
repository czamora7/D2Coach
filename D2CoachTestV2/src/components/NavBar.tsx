import { useState } from "react";
import { Link } from "react-router-dom";
interface NavBarProperties {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  navLinks: string[];
}
function NavBar({ brandName, imageSrcPath, navItems, navLinks }: NavBarProperties) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={imageSrcPath}
            width="90"
            height="50"
            className="d-inline-block align-center"
            alt="D2 Coach"
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
            <Link to={navLinks[index]}
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  >
                  {items}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;
