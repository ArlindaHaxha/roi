import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import image from "../assets/logo.png";

const Header = () => (
  <header className="header-area">
    <div className="main-header-area">
      <div className="container-fluid">
        <div className="header_bottom_border">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2">
              <div className="logo">
                <Link to="/">
                  <img src={image} alt="Kredo Kard" className="main_logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="main-menu d-none d-lg-block">
                <ul id="navigation">
                  <li>
                    <Link to="/kako-da-platam">Како да платам</Link>
                  </li>
                  <li>
                    <Link to="/opsti-uslovi">Општи услови</Link>
                  </li>
                  <li>
                    <a href="#prasanja">Прашања</a>
                  </li>
                  <li>
                    <a href="/tarifnik">Тарифник</a>
                  </li>
                  <li>
                    <Link to="/kontakt">Контакт</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="Appointment">
                <div className="phone_num d-none d-xl-block">
                  <a href="tel:+38923243003">
                    <i className="fa fa-phone"></i> +389 2 3243 003
                  </a>
                </div>
                <div className="d-none d-lg-block">
                  <Link className="boxed-btn4" to="/">
                    Аплицирај
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
