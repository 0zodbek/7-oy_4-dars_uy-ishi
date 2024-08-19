import React, { useContext } from "react";
import { UserContext, TokenContext } from "../App";
import { useNavigate, Link, NavLink } from "react-router-dom";
function Header() {
  const token = useContext(TokenContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-auth bg-neutral text-white">
        <div className="flex justify-end max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          {token.token && (
            <div className="flex gap-x-2 items-center">
              <h1 className="text-right text-xs text-blue-50 sm:text-sm">
                Hello, {user.user.name}
              </h1>{" "}
              <button className="btn btn-xs btn-outline btn-primary">
                LOGOUT
              </button>
            </div>
          )}
          {!token.token && (
            <div className="flex gap-x-2 items-center">
              <Link
                to="login"
                className=" hover:underline cursor-pointer text-right text-xs sm:text-sm"
              >
                Sign in / Guest
              </Link>
              <Link
                to="register"
                className="hover:underline cursor-pointer text-right text-xs sm:text-sm"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="navbar bg-base-100 mx-auto max-w-6xl">
       <div className="container mx-auto">
       <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-primary">C</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            {
              token.token && (<>
              <li><NavLink to="/checkout">Checkout</NavLink></li>
              <li><NavLink to="/orders">Orders</NavLink></li>
              </>)
            }
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex justify-end">
          <a className="btn">Button</a>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Header;
