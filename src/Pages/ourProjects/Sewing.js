import React from 'react'
import SewingImg from '../../img/sewingImg.png'

export default function Sewing() {
  return (
    <>
      <section id='sewingSection'>
        <div className="container">
          <div data-aos="fade-up" className='sewingContent'>
            <div data-aos="fade-up" className='sewingInfo'>
              <h2 data-aos="fade-up">Lorem, ipsum.</h2>
              <p data-aos="fade-up">Boulevard — это совершенно новое понимание комфорта и высокого класса недвижимости. Семиэтажный жилой комплекс выполнен в классическом европейском стиле архитектуры.</p>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">кв.м: <span>65 м2</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Тип:<span>Новостройка</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Местонахождение:<span>Ташкент</span></h3>
              <hr className='sewingHr' />
              <h3 data-aos="fade-up">Дата Релиза:<span>2022</span></h3>
              <hr className='sewingHr' />
            </div>
            <img data-aos="fade-up" src={SewingImg} alt="..." />
          </div>
        </div>
      </section>
    </>
  )
}
