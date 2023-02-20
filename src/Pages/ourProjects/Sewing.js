import React from 'react'
import SewingImg from '../../img/sewingImg.png'

export default function Sewing() {
  return (
    <>
      <section id='sewingSection'>
        <div className="container">
          <div className='sewingContent'>
            <div className='sewingInfo'>
              <h2>Lorem, ipsum.</h2>
              <p>Boulevard — это совершенно новое понимание комфорта и высокого класса недвижимости. Семиэтажный жилой комплекс выполнен в классическом европейском стиле архитектуры.</p>
              <hr className='sewingHr' />
              <h3>кв.м: <span>65 м2</span></h3>
              <hr className='sewingHr' />
              <h3>Тип:<span>Новостройка</span></h3>
              <hr className='sewingHr' />
              <h3>Местонахождение:<span>Ташкент</span></h3>
              <hr className='sewingHr' />
              <h3>Дата Релиза:<span>2022</span></h3>
            </div>
            <img src={SewingImg} alt="..." />
          </div>
        </div>
      </section>
    </>
  )
}
