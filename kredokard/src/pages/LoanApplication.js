import React, { useState } from "react";
import "./LoanApplication.css";

export default function LoanApplication() {
  const [amount, setAmount] = useState(30000);
  const [term, setTerm] = useState(24);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  const maxAmount = 120000;
  const minAmount = 7000;
  const maxTerm = 48;
  const minTerm = 2;

  const annualRate = 0.649814;
  const monthlyRate = annualRate / 12;
  const monthlyPayment = ((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))).toFixed(0);

  const validateForm = () => {
    const newErrors = {};

    if (!phone.trim()) newErrors.phone = "Внесете телефонски број";
    else if (!/^\+?\d{7,15}$/.test(phone)) newErrors.phone = "Невалиден телефонски број";

    if (!email.trim()) newErrors.email = "Внесете емаил адреса";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Невалиден емаил";

    if (!firstName.trim()) newErrors.firstName = "Внесете име";
    if (!lastName.trim()) newErrors.lastName = "Внесете презиме";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Формуларот е успешно поднесен!");
    }
  };

  return (
    <div className="loan-container">
      <div className="loan-wrapper">
        <div className="loan-info">
          <h1>Кредити од</h1>
          <h2>7.000 до</h2>
          <h2>120.000 мкд</h2>
        </div>

        <form className="loan-form" onSubmit={handleSubmit}>
          <h3>АПЛИЦИРАЈ ВЕДНАШ</h3>

          <label>Износ: {amount.toLocaleString()} мкд</label>
          <div className="custom-slider">
            <input
              type="range"
              min={minAmount}
              max={maxAmount}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <label>Рок: {term} месеци</label>
          <div className="custom-slider">
            <input
              type="range"
              min={minTerm}
              max={maxTerm}
              step={1}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
          </div>

          <p>Износ на рата: {monthlyPayment} мкд</p>
          <p>СВТ (%): {(annualRate * 100).toFixed(4)}</p>

          <input
            type="text"
            placeholder="Телефонски број"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="email"
            placeholder="Емаил адреса"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="name-fields">
            <input
              type="text"
              placeholder="Име"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Презиме"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {(errors.firstName || errors.lastName) && (
            <p className="error">
              {errors.firstName || errors.lastName}
            </p>
          )}

          <button type="submit">Аплицирај</button>
        </form>
      </div>
    </div>
  );
}
