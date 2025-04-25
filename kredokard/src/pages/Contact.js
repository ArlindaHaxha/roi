import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Contact.css";

const Contact = () => {
  const lat = 41.998436;
  const lng = 21.425416;

  return (
    <div className="Contact">
      <div className="Contact-container">
        <div className="contact-info">
          <div className="contact-title">
            <h1>Контакт</h1>
          </div>
          <div className="contact-list">
            <ul>
              <li>Телефон: +389 2 3243 003</li>
              <li>Адреса: ул. Костурски Херои бр.47 – Скопје</li>
              <li>E-mail: fdkredokard@gmail.com</li>
            </ul>
          </div>
        </div>
        <div id="map">
          <iframe
            src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
