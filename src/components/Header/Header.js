import { NavLink } from "react-router-dom";
const Header = () => {
    return ( 
        <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
     );
}
 
export default Header;