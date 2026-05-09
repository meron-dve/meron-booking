import { Link } from "react-router-dom";

export function TopNavigation() {
  return (
    <div className="nav-container">
      <nav className="nav-part">
        <p className="greet">Hello Customer!</p>
        <ul className="nav-ul">
          <li>
            <Link to="/form" className="lin">
              Form
            </Link>
          </li>

          <li>
            {" "}
            <Link to="/main" className="lin">
              Main
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="lin">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
