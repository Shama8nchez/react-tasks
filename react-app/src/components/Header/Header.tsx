import React, { MouseEvent } from "react";
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

class Header extends React.Component<Record<string, never>, { title: string }> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      title: setTitle(),
    };
  }

  handleClick = (e: MouseEvent) => {
    const el = (e.target as HTMLElement).textContent;
    if (el) this.setState({ title: el });
  };

  render() {
    return (
      <header className="header">
        <HeaderTitle title={this.state.title} />
        <nav>
          <ul className="nav__list">
            {ROUTE.filter((item) => item.path !== EPATH.NOTFOUND).map(
              (item, index) => (
                <NavLi
                  to={item.path}
                  title={item.page}
                  key={`title${index}`}
                  onClick={this.handleClick}
                />
              )
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
