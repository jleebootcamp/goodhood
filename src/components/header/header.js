import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <nav className={style.navbar}>
      <div className={style.header}>
        <Link to="/" className={style.headerTitle}>
          What's Good In Da Hood
        </Link>
        <ul className={style.header_nav}>
          <li>
            <Link
              className={style.nav_item}
              to="/"
              // onClick={() => setCurrentPage("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={style.nav_item}
              to="/login"
              // onClick={() => setCurrentPage("LogIn")}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}



// import "./header.css";
// import { Link } from "react-router-dom";

// export default function Header({ currentPage, setCurrentPage }) {
//   console.log(6, currentPage);
//   return (
//     <div className="header">
//       <a className="headerTitle">What's Good In Da Hood</a>
//       <ul className="header-nav mr-auto">
//         <li className="nav-item active">
//           <Link
//             className="nav-link"
//             name="top"
//             to="Login"
//             onClick={() => setCurrentPage("LogIn")}
//           >
//             LogIn
//           </Link>
//         </li>
//         <li className="nav-item active">
//           <Link
//             className="nav-link"
//             name="top"
//             to="Home"
//             onClick={() => setCurrentPage("Home")}
//           >
//             Home
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }



/* import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">What's Good In Da Hood</h1>
          </Link>
          <p className="m-0">Neighborhood Community</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; */
