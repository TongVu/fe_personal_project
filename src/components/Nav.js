import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* <Link to="/"> */}
          {/* <img
              src={require("../panda.png")}
              style={{ width: "80px", borderRadius: "50%" }}
            />{" "} */}
          Tong Vu
          {/* </Link> */}
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />

        <div className="collapse navbar-collapse " id="collapsibleNavId">
          <ul className="navbar-nav mx-auto mt-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" href="#"> */}
              <NavLink className="nav-link" to="/collections">
                Browse Collections
              </NavLink>
              {/* </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fake">
                Apps
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
