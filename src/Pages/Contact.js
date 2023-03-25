import React from 'react'
import PatternIcon from '../img/pattern_icon.svg'
import contactPhone from '../img/contactPhone.png'

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className='whyUsTitle_content contact'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Контакты</h2>
            <p data-aos="fade-up">Мы всегда рады ответить на все ваши вопросы, для получения более подробной информации, просто свяжитесь с нами по ниже указанным данным.</p>
          </div>

          <div className="contactContent d-flex justify-content-between align-items-center">
            <div className="contactInfo">
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>ТЕЛЕФОН</h3>
                <span>+998 99 663 7000</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>АДРЕС</h3>
                <span>Лайлитугон, 1/6  Ташкент, Чорсу ж/м</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>EMAIL</h3>
                <span>etusha@gmail.com</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>SOCIAL MEDIA</h3>
                <span>@etusha</span>
              </div>
            </div>
            <img className="contactPhone" data-aos="fade-up" src={contactPhone} alt="..." />
          </div>

          <div className="questions " data-aos="fade-up">
            <h2>Остались Bопросы?</h2>
            <span>Оставьте свой номер телефона и мы свяжемся с вами! </span>
            <form action="">
              <div>
                <h2>Ваше имя</h2>
                <input type="text" name="name" id="name" placeholder="Имя-фамилия" />
              </div>
              <div>
                <h2>номер телефона</h2>
                <input type="number" name="name" id="name" placeholder="+998 99 663 7000" />
              </div>
              <div>
                <h2>Удобное время для вас</h2>
                <input type="date" name="name" id="name" placeholder="09:41" />
              </div>
            </form>
            <a href="tel:+998993585110">Позвоните мне</a>
          </div>
        </div>
      </section>
    </>
  )
}
