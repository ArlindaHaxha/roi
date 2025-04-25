import React, { useState } from "react";
import "./LoanApplication.css";

export default function LoanApplication() {
  const [amount, setAmount] = useState(30000);
  const [term, setTerm] = useState(24);

  const maxAmount = 120000;
  const minAmount = 7000;
  const maxTerm = 48;
  const minTerm = 2;

  const annualRate = 0.649814;
  const monthlyRate = annualRate / 12;
  const monthlyPayment = ((amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))).toFixed(0);

  return (
    <div className="loan-container">
      <div className="loan-wrapper">
        <div className="loan-info">
          <h1>Кредити од</h1>
          <h2>7.000 до</h2>
          <h2>120.000 мкд</h2>
        </div>

        <div className="loan-form">
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

          <input type="text" placeholder="Телефонски број" />
          <input type="email" placeholder="Емаил адреса" />
          <div className="name-fields">
            <input type="text" placeholder="Име" />
            <input type="text" placeholder="Презиме" />
          </div>

          <button>Аплицирај</button>
        </div>
      </div>
    </div>
  );
}
