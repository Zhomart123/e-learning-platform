import { NavLink } from "react-router-dom";
// import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"


    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                <strong>Edu</strong>Learn
                </NavLink>

                {/* <BtnDarkMode/> */}

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                            Home
                        </NavLink> 
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/coursesl" className={({isActive}) => isActive ? activeLink : normalLink}>
                            Courses
                        </NavLink> 
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/about" className={({isActive}) => isActive ? activeLink : normalLink}>
                            About us
                        </NavLink> 
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                            Contact
                        </NavLink> 
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/userdashboard" className={({isActive}) => isActive ? activeLink : normalLink}>
                            My courses
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;