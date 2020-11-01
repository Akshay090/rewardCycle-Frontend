import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center px-4 py-3">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img className="w-8 h-8" src={Logo} alt="Logo" />
              <span className="font-semibold font-sans mx-2 text-xl text-indigo-700">
                Reward Cycle
              </span>
            </div>
          </Link>
          <div className="flex items-center">
            <Link to="/">
              <span role="img" aria-label="home" className="text-2xl">
                🏠
              </span>
            </Link>

            <span
              role="img"
              aria-label="register"
              className="text-2xl mt-1 ml-4 overflow-hidden"
            >
              <Link to="/register">🖆</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
