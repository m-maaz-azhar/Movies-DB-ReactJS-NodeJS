import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  faRightFromBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let navigate = useNavigate();
  let session = localStorage.getItem("movies-db-session");

  let handleLogout = () => {
    localStorage.removeItem("movies-db-session");
    navigate("/");
  };

  return (
    <header>
      <ul className="social-icons">
        {!session ? (
          <>
            <li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon style={{ margin: "0 5px" }} icon={faUser} />{" "}
                Login
              </Link>
            </li>
            <span style={{ color: "white" }}>|</span>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon
                  style={{ margin: "0 5px" }}
                  icon={faUserPlus}
                />{" "}
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <li onClick={handleLogout} style={{ color: 'white' }}>
            <FontAwesomeIcon
              style={{ margin: "0 5px" }}
              icon={faRightFromBracket}
            />
            Logout
          </li>
        )}
      </ul>
      <section className="title">
        <h1>MOVIES DB</h1>
        <p>A vast Movies Database</p>
      </section>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
