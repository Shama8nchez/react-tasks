import React, { MouseEvent } from "react";
import NavLi from "./NavLi";
import HeaderTitle from "./HeaderTitle";

function setTitle() {
  if (
    location.pathname === "/" ||
    location.pathname === ""
  )
    return "Main";
  else if (
    location.pathname === "/about/" ||
    location.pathname === "/about"
  )
    return "About us";
  else return "404. Page not found";
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
              to={"/"}
              title={"Main"}
              onClick={this.handleClick}
            />
            <NavLi
              to={"/about"}
              title={"About us"}
              onClick={this.handleClick}
            />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
