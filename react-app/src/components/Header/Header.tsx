import React, { MouseEvent } from "react";
import NavLi from "./NavLi";
import HeaderTitle from "./HeaderTitle";
import { EPAGES, EPATH } from "../../data/constants";

function setTitle() {
  if (location.pathname === "/" || location.pathname === "") return EPAGES.MAIN;
  else if (location.pathname === "/about/" || location.pathname === "/about")
    return EPAGES.ABOUT;
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
            <NavLi
              to={EPATH.MAIN}
              title={EPAGES.MAIN}
              onClick={this.handleClick}
            />
            <NavLi
              to={EPATH.ABOUT}
              title={EPAGES.ABOUT}
              onClick={this.handleClick}
            />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
