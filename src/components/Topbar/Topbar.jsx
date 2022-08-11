import "./topbar.scss";
import {
  Person,
  Mail,
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
  WhatsApp,
  Phone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link className="logo" to="/">
            Mohamed Ali Mrad
          </Link>

          {/* <div className="itemComtainer first">
            <Person className="icon" />
            <span>+216 27 914 561 &nbsp; /&nbsp;&nbsp; +216 56 813 222</span>
          </div>
          <div className="itemComtainer"></div>
          <div className="social-media">
            <a
              target="_blank"
              href="https://www.facebook.com/mohamed.mrad.1840/"
            >
              <Facebook className="icon social" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=21627914561"
            >
              <WhatsApp className="icon social" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-ali-mrad-3a9370199/"
            >
              <LinkedIn className="icon social" />
            </a>

            <a target="_blank" href="https://github.com/dalimedmrad">
              {" "}
              <GitHub className="icon social" />
            </a>
            <a href={`mailto:mohamedalimrad3@gmail.com`}>
              <Mail className="icon social" />
            </a>
            <a href="tel:+21627914561">
              <Phone className="icon social" />
            </a>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
