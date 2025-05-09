// src/pages/Tarifnik.js
import React from "react";
import "./Tarifnik.css";

export default function Tarifnik() {
  return (
    <main className="tarifnik-page">
      <div className="tarifnik-container">
        <h1>Тарифник на услуги на ФД Кредо Кард</h1>

        <section>
          <h3>1. Трошоци за кредитот</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  Еднократен надоместок за обработка на барање за одобрување на
                  кредит.
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Месечен надоместок за администрирање на кредит.</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Еднократна провизија за одобрување од 5% до 10% од одобрениот
                  износ во зависност од пресметаниот ризик за пласираниот
                  кредит.
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>2. Надоместоци на услуги по кредити</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  Административен надоместок за писмено известување (30ти ден во
                  доцнење)
                </td>
                <td>0,00 ден</td>
              </tr>
              <tr>
                <td>
                  Административниот надомест за управување со кредит во доцнење
                  над 60 дена
                </td>
                <td>до 5.000,00 ден</td>
              </tr>
              <tr>
                <td>
                  Административен надоместок за раскинување на договор за
                  доцнење над 75 дена
                </td>
                <td>до 10.000,00 ден</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>
            3. Трошоци во случај на доцнење (нередовна отплата на кредитот)
          </h3>
          <table>
            <tbody>
              <tr>
                <td>
                  Еднократен надомест на секои седум дена доцнење за секој
                  ануитет
                </td>
                <td>900,00 ден</td>
              </tr>
            </tbody>
          </table>
        </section>

        <p className="note">
          Надоместоците од точките 2 и 3 не се вклучени во пресметката на СВТ.
          Овие надоместоци самостојно или во комбинација со кој било друг
          надоместок не може да надминат 60% од износот на одобрениот кредит во
          текот на целиот период на важност на договорот.
        </p>
      </div>
    </main>
  );
}
