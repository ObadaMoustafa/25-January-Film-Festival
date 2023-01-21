import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import PinDropIcon from "@mui/icons-material/PinDrop";
// import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  //write code here

  return (
    <Box bottom={0} width="100%" bgcolor="first.main">
      <footer className="footer">
        <div className="footer-logo-text-first">
          <Link to="/">
            <div className="footer-logo-text">
              25 January <br></br>Film Festival
            </div>
          </Link>
        </div>
        <div className="footer-elements">
          <div className="footer-left">
            <div className="footer-follow-us"> Follow Us</div>
            <div className="footer-social-logos">
              <a
                href="https://www.facebook.com/people/25-January-Film-Festival/100067079333985/?paipv=0&eav=AfayuibwgJ1ebVg5Cb468tLaMyO3sgbo5hKM7cOcWI6l_zUarkxZlkNW2O2EH-t7WEk&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook fontSize="medium" className="footer-social-logo" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram fontSize="medium" className="footer-social-logo" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube fontSize="medium" className="footer-social-logo" />
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <Link to="/" className="footer-logo-text">
              25 January <br></br>Film Festival
            </Link>
          </div>
          <div className="footer-right">
            <div className="footer-contact-us">Contact Us</div>
            <div className="footer-contact-line">
              <div className="footer-contact">
                <PinDropIcon fontSize="small" />
                Oude Rijn, 2312 HG Leiden
              </div>
              <div className="footer-contact">
                <EmailIcon fontSize="small" />
                info@25januaryfilmfestival.nl
              </div>
              {/* <div className="footer-contact">
                <CallIcon fontSize="small" /> 0612345678
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        Copyright &copy; 2023 &bull; 999 Geen Dienst Studio
      </div>
    </Box>
  );
}

export default Footer;
