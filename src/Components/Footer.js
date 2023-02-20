import React from 'react'
import Telegram from '../img/telegram.svg'
import Instagram from '../img/instagram.svg'
import FaceBook from '../img/facebook.svg'
import Brand from '../img/brand-removebg.png'

export default function Footer() {
  return (
    <>
      <footer id="footer">
      <section id="footerSection">
        <div className="container">
          <nav className="footerNav d-flex justify-content-between">
            <div data-aos="fade-up" className="footerBrand">
              <img data-aos="fade-up" src={Brand} alt="..." />
              <ul className="socialList d-flex align-items-center">
                <li><a data-aos="fade-up" href="#"><img src={Telegram} alt="..." /></a></li>
                <li><a data-aos="fade-up" href="#"><img src={Instagram} alt="..." /></a></li>
                <li><a data-aos="fade-up" href="#"><img src={FaceBook} alt="..." /></a></li>
              </ul>
            </div>

            <ul data-aos="fade-up" className="footerList">
              <h2 data-aos="fade-up">Главная</h2>
              <li><a data-aos="fade-up" href="#">Почему мы?</a></li>
              <li><a data-aos="fade-up" href="#">Цифры</a></li>
              <li><a data-aos="fade-up" href="#">Наши проекты</a></li>
              <li><a data-aos="fade-up" href="#">Наша команда</a></li>
              <li><a data-aos="fade-up" href="#">Контакты</a></li>
            </ul>

            <ul data-aos="fade-up" className="footerList">
              <h2 data-aos="fade-up">Наши проекты</h2>
              <li><a data-aos="fade-up" href="#">ЖК Boulevard</a></li>
              <li><a data-aos="fade-up" href="#">ЗД “Oq Tosh”</a></li>
              <li><a data-aos="fade-up" href="#">ЖК Zenith</a></li>
              <li><a data-aos="fade-up" href="#">Наша команда</a></li>
              <li><a data-aos="fade-up" href="#">ЖК Darkhan</a></li>
            </ul>

            <ul data-aos="fade-up" className="footerList contact_info">
              <h2 data-aos="fade-up">Контакты</h2>
              <li><a data-aos="fade-up" href="tel:+998 99 663 70 00">+998 99 663 70 00</a></li>
              <li><a data-aos="fade-up" href="#">etusha@gmail.com</a></li>
              <li><a data-aos="fade-up" href="#">Наши проекты</a></li>
              <li><a data-aos="fade-up" href="#">Наша команда</a></li>
              <li><a data-aos="fade-up" href="#">Ташкент, Лайлитугон 1/6, Чорсу ж/м</a></li>
            </ul>
          </nav>
          <h2 className="copyright">Copyright © 2023 Etusha. All rights reserved.</h2>
        </div>
      </section>
    </footer>
    </>
  )
}
