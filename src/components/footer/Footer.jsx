import React from "react";
import "./footer.css";
import {
  Person,
  Mail,
  Facebook,
  GitHub,
  LinkedIn,
  WhatsApp,
  Phone,
} from "@material-ui/icons";
const Footer = () => {
  return (
    <footer className="fooalluser">
      <div class="carda">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="footer-text">
              <div class="d-flex">
                <h1
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginBottom: "24px",
                  }}
                >
                  Contact information
                </h1>
              </div>
              <div className="itemComtainer first col-xm-12 col-sm-12">
                <Person className="icon" />
                <span>
                  +216 27 914 561 &nbsp; /&nbsp;&nbsp; +216 56 813 222
                </span>
              </div>
              <div className="social mt-3 mb-3">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style={{ fontSize: "16px" }}>
          <div class="col-md-12 col-sm-6 col-xs-6">
            <div style={{ textAlign: "center" }}>
              <p>
                Tous droits réservés <i class="fa fa-copyright"></i>{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
