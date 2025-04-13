// import { Link } from 'react-router-dom';
// import './NavBar.css';

// function NavBar() {
//     return (
//         <nav className="navbar">
//             <div className="nav-left">
//                 <Link to="/">Home</Link>
//                 <Link to="/fav">Favourites</Link>
//                 <Link to="/gallery">Gallery</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/game">Game</Link>
//             </div>
//             <div className="nav-right">
//                 <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Cat Logo" className="cat-logo" />
//             </div>
//         </nav>
//     );
// }

// export default NavBar;

import { Link } from "react-router-dom";
import "./NavBar.css";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="data:image/png;base64,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"
          alt="Cat Logo"
          className="cat-logo"
        />
        <span className="brand-name">ChintuVerse</span>
      </div>
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        {/* <Link to="/fav">Favourites</Link> */}
        <Link to="/game">Game</Link>
        <Link to="/chintu">Chintu</Link>
      </div>
      <ThemeToggle></ThemeToggle>
    </nav>
  );
}

export default NavBar;
