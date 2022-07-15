import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-flex mt-auto">
      <div className="footer-copy-right">
        Copyright 2022 - All rights Reserved
      </div>

      <div className="footer-middle">
        <Link to="/fake">Privacy Policy</Link> {" | "}
        <Link to="/fake">Terms &amp; Conditions</Link> {" | "}
        <Link to="/fake">Accessibility</Link> {" | "}
        <Link to="/fake">Cookie settings</Link>
      </div>

      <div className="footer-icons">
        <div className="icon">
          <Link to="/fake" className="text-secondary">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="icon">
          <Link to="/fake" className="text-secondary">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="icon">
          <Link to="/fake" className="text-secondary">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="icon">
          <Link to="/fake" className="text-secondary">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
