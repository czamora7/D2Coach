import { useState } from "react";
interface NavBarProperties {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}
function NavBar({ brandName, imageSrcPath, navItems }: NavBarProperties) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
                <a
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href="#"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;
