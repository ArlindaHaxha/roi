import React from 'react';
import './Footer.css';
import logo from "../assets/logo.png"

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__columns">

        {/* Contact Info */}
        <div className="footer__col">
            <div className="footer__logo">
                <img src={logo} alt="Kredo Kard Logo" />
            </div>
            <p><a href="mailto:fdkredokard@gmail.com">fdkredokard@gmail.com <br />+389 2 3243 003</a></p>
          <p><strong className='anotherColor'>Скопје</strong><br />
            ул. Костурски Херои бр.47<br />
            +389 2 3243 003<br />
            +389 70 273 288<br />
            +389 70 273 289
          </p>
          <p><strong className='anotherColor'>Тетово</strong><br />
            ул. Димо Гавроски Кара бр.1/1<br />
            бл.54-л.15<br />
            +389 70 273 036
          </p>
         
        </div>

        {/* Useful Links */}
        <div className="footer__col">
          <h4>Корисни линкови</h4>
          <ul>
            <li><a href="/opsti-uslovi">Општи Услови</a></li>
            <li><a href="/privatnost">Политика на Приватност</a></li>
            <li><a href="/zastita">Заштита на лични податоци</a></li>
            <li><a href="/kolacinja">Политика за колачиња</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Брзи линкови</h4>
          <ul>
            <li><a href="/apliciraj">Како да аплицирам?</a></li>
            <li><a href="/kako-da-platam">Како да платам</a></li>
            <li><a href="/#prasanja">ЧПП</a></li>
            <li><a href="/krediti">Кредити</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__col">
          <h4>Биди во тек</h4>
          <p>Претплатете се и бидете во тек со најновите понуди и новости на Кредо Кард.</p>
          <form className="footer__newsletter">
            <input type="email" placeholder="Внесете емаил адреса" />
            <button type="submit">Претплати се</button>
          </form>
        </div>

      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} ROI</p>
      </div>
    </div>
  </footer>
);

export default Footer;
