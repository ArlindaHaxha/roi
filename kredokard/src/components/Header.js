import React from 'react';
import './Header.css';  
import image from "../assets/logo.png";

const Header = () => (
  <header className="header-area">
    <div className="main-header-area">
      <div className="container-fluid">
        <div className="header_bottom_border">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-2">
              <div className="logo">
                <a href="/">
                  <img src={image} alt="Kredo Kard" className="main_logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="main-menu d-none d-lg-block">
                <ul id="navigation">
                  <li><a href="/kako-da-platam">Како да платам</a></li>
                  <li><a href="/opsti-uslovi">Општи услови</a></li>
                  <li><a href="#prasanja">Прашања</a></li>
                  <li><a href="/tarifnik">Тарифник</a></li>
                  <li><a href="/kontakt">Контакт</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="Appointment">
                <div className="phone_num d-none d-xl-block">
                  <a href="tel:+38923243003"><i className="fa fa-phone"></i> +389 2 3243 003</a>
                </div>
                <div className="d-none d-lg-block">
                  <a className="boxed-btn4" href="#apliciraj">Аплицирај</a>
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
