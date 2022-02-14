import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ToggleTheme from "../Toggle";
import "./index.css";

import {
  NavContainer,
  ImageElement,
  LinksContainer,
  NavbarButton,
} from "./styledComponents";

const Navbar = (props) => {
  const { history } = props;
  const logoutButton = () => {
    localStorage.removeItem("login-token");
  };

  return (
    <NavContainer>
      <search>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => props.filterMovieList(e)}
        />
      </search>
      <ToggleTheme />
      <LinksContainer>
        <Link to="/login">
          <NavbarButton type="button" onClick={logoutButton}>
            Logout
          </NavbarButton>
        </Link>
      </LinksContainer>
    </NavContainer>
  );
};

export default Navbar;
