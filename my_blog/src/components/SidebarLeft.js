import React from "react";
import { IoHome } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBorderStyle } from "react-icons/bs";
import { GrProductHunt } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";

const SidebarLeft = () => {
  return (
    <>
      <div className="col-2 text-white bg-dark">
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5">ADMIN</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                <svg className="bi me-2" width="16" height="16">
                  <IoHome />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                <svg className="bi me-2" width="16" height="16">
                  <AiOutlineDashboard />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                <svg className="bi me-2" width="16" height="16">
                  <BsBorderStyle />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                <svg className="bi me-2" width="16" height="16">
                  <GrProductHunt />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                <svg className="bi me-2" width="16" height="16">
                  <BiUserCircle />
                </svg>
                Customers
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href="/"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="/">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
