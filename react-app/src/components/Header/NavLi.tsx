import { Link } from "react-router-dom";
import { TNavLi } from "types";

export default function NavLi(props: TNavLi) {
  return (
    <li>
      <Link to={props.to} onClick={props.onClick} className="nav__list_item">
        {props.title}
      </Link>
    </li>
  );
}
