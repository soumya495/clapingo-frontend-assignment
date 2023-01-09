import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="w-11/12 max-w-[1200px] mx-auto flex items-center justify-between min-h-[90px]">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6 xl:space-x-12">
            <li>
              <a
                href="#"
                className="font-poppins font-semibold text-text2 text-md text-opacity-90 hover:text-opacity-100"
              >
                Plans & Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins font-semibold text-text2 text-md text-opacity-90 hover:text-opacity-100"
              >
                Teach with us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins font-semibold text-text2 text-md text-opacity-90 hover:text-opacity-100"
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-poppins font-semibold text-text2 text-md text-opacity-90 hover:text-opacity-100"
              >
                Kids
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(360deg, #52A49A -65.93%, #00CDAC 100%)",
              }}
              className="flex items-center space-x-1 px-6 py-[10px] rounded-full hover:drop-shadow-lg "
            >
              <img src="/assets/icon-profile.svg" width={24} height={24} />
              <p className="font-poppins text-white text-md">Login</p>
            </button>
          </Link>
          <button className="lg:hidden">
            <img src="/assets/menu.svg" width={32} height={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
