import React, { MouseEvent, useState } from "react";
import NavLi from "./NavLi";
import HeaderTitle from "./HeaderTitle";
import { EPAGES, EPATH, ROUTE } from "../../data/constants";

function setTitle() {
  if (location.pathname === "/" || location.pathname === "") return EPAGES.MAIN;
  else if (location.pathname === "/about/" || location.pathname === "/about")
    return EPAGES.ABOUT;
  else if (location.pathname === "/forms/" || location.pathname === "/forms")
    return EPAGES.FORMS;
  else return EPAGES.NOTFOUND;
}

function Header() {
  const [header, setHeader] = useState<string | EPAGES>(setTitle());

  const handleClick = (e: MouseEvent) => {
    const el = (e.target as HTMLElement).textContent;
    if (el) setHeader(el);
  };

  return (
    <header className="header">
      <HeaderTitle title={header} />
      <nav>
        <ul className="nav__list">
          {ROUTE.filter((item) => item.path !== EPATH.NOTFOUND).map(
            (item, index) => (
              <NavLi
                to={item.path}
                title={item.page}
                key={`title${index}`}
                onClick={handleClick}
              />
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
