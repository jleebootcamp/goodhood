import "./header.css";
import { Link } from "react-router-dom";

export default function Header({ currentPage, setCurrentPage }) {
  console.log(6, currentPage);
  return (
    <div className="header">
      <a className="headerTitle">What's Good In Da Hood</a>
      <ul className="header-nav mr-auto">
        <li className="nav-item active">
          <Link
            className="nav-link"
            name="top"
            to="Login"
            onClick={() => setCurrentPage("LogIn")}
          >
            LogIn
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            name="top"
            to="Home"
            onClick={() => setCurrentPage("Home")}
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
