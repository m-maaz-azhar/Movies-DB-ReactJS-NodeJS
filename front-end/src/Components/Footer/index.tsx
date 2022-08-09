import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobeAsia,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="contact-info">
          <p>
            Head Office,
            <br />
            A-123, ABC Road Karachi,
            <br />
            Pakistan
          </p>
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} /> UAN: 111-222-333
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faGlobeAsia} /> (+1) 2345678-90
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> example@email.com
              </span>
            </li>
          </ul>
        </div>
        <div className="usefull-links">
          <h2>Useful Links</h2>
          <ul>
            <li>
              <a href="./pages/contact.html">Contact Us</a>
            </li>
            <li>
              <a href="./pages/about_us.html">About Us</a>
            </li>
            <li>
              <a href="./pages/privacy_policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="./pages/terms.html">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="connect-with-us">
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} size={"2x"} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} size={"2x"} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faYoutube} size={"2x"} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} size={"2x"} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <section className="footer-b">
        <p>Copyright © 2020 Movies DB</p>
      </section>
    </>
  );
}
