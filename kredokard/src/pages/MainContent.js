import React from 'react';
import './MainContent.css';
import photo from "../assets/pp30.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className='container-1'>
            <img src={photo}></img>
        </div>
        <div className='container-2'>
            <h1>КАКО ДА ПЛАТАМ?</h1>
            <p>Плаќањето може да го извршите на Благајна во нашата <br /> експозитура, секој работен ден од 08:30 до 16:30 часот или во <br /> банка на нашата жиро сметка.</p>
            <ul>
                <li>Назив на примач: ФД Кредо Кард ДОО Скопје</li>
                <li>Трансакциска сметка: 210074873800136</li>
                <li>Банка на примач: НЛБ Тутунска Банка</li>
            </ul>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
