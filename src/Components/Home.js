import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "../styles.css";
import HeroBgVd from '../img/HeroBgVd.mp4'
import PatternIcon from '../img/pattern_icon.svg'
import ConfirmationIcon from '../img/confirmation_icon.svg'
import SxemaIcon from '../img/sxema_icon.svg'
import PlanIcon from '../img/plan_icon.svg'
import StarIcon from '../img/star_icon.svg'
import StandardsImg from '../img/standardsImg.png'
import Team1 from '../img/team1.png'
// import ProjectImg2 from '../img/project2.png'
// import ProjectImg3 from '../img/project3.png'
// import ProjectImg4 from '../img/project4.png'
// import ProjectImg5 from '../img/project5.png'
// import ProjectImg6 from '../img/project6.png'
// import ProjectImg7 from '../img/project7.png'
// import ProjectImg8 from '../img/project8.png'
import contactPhone from '../img/contactPhone.png'
import Telegram from '../img/telegram.svg'
import Instagram from '../img/instagram.svg'
import FaceBook from '../img/facebook.svg'
import Brand from '../img/brand-removebg.png'

export default function Home() {
  return (
    <>
    <main>
      {/* HERO SECTION START */}
      <section id='heroSection'>
        <div>
          <video className='heroVideo' src={HeroBgVd} autoPlay loop muted />
        </div>
        <div className="container">
          <div className='heroContent'>
            <h2 className='hero_title'>Функция, Комфорт, Элегантность.</h2>
            <div className='heroInfo'>
              <h3 className='heroInfo_title'>Подать Заявку</h3>
              <form className="was-validated heroForm">
                <div className="">
                  <input type="text" className="form-control is-valid" id="validationServer01" required placeholder='Введите ваше имя' />
                </div>
                <div>
                  <input type="number" className="form-control is-valid" id="validationServer01" required placeholder='Ваш номер телефона' />
                </div>
                <div className="mb-3">
                  <select className="form-select" required aria-h2="select example">
                    <option value="">Выберите вид услуги</option>
                    <option value="1">Шитье</option>
                    <option value="2">Парикмахер</option>
                    <option value="3">Химическая Очистка</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="validationTextarea" placeholder="Оставьте свое сообщение" required></textarea>
                </div>
                <div>
                  <button className="btn bg-success heroFormSubmit" type="submit">Отправить</button>
                </div>
              </form>
            </div>
          </div>    
        </div>
      </section> 
      {/* HERO SECTION END */}
      <section id='whyUs_section'>
        <div className="container">
          <div className='whyUsTitle_content'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Почему мы?</h2>
          </div>
          <div className='whyUs_content'>
            <div data-aos="fade-up" className='whyUs_card'>
              <img src={ConfirmationIcon} alt="..." />
              <h3>Квалифицированные специалисты</h3>
              <p>Принято считать, что специалисты стоят дорого, но если посчитать все издержки, возникшие от горе-мастеров, то в итоге выходит дешевле</p>
            </div>
            <div data-aos="fade-up" className='whyUs_card'>
              <img src={SxemaIcon} alt="..." />
              <h3>Точный расчет сметы</h3>
              <p>Профессиональный и точный расчет сметы работ позволит сократить общую сумму расходов на ремонт, в некоторых случаях на 40-60%</p>
            </div>
            <div data-aos="fade-up" className='whyUs_card'>
              <img src={PlanIcon} alt="..." />
              <h3>Составляем план этапов работы</h3>
              <p>Это поставляет сократить количество времени, которое заказчик тратит на согласование. Мы снимаем эту головную боль</p>
            </div>
            <div data-aos="fade-up" className='whyUs_card'>
              <img src={StarIcon} alt="..." />
              <h3>Договор и гарантии </h3>
              <p>Договор дисциплинирует и дает гарантин обеим сторонам мы несем полную отвественность и даем гарантии качественного исполнения в срок </p>
            </div>
          </div>
        </div>
        <div className='standardsContent d-flex justify-content-center align-items-center'>
            <img data-aos="fade-right" src={StandardsImg} alt="..." />
            <div className='standardsInfo'>
              <h2 data-aos="fade-up">Установливаем высокие стандарты</h2>
              <div data-aos="fade-up" className='standardsInfoContent d-flex'>
                <div className='standardsInfoSec'>
                  <span>15</span>
                  <h3>Лет опытa в отрасли строительства</h3>
                </div>
                <div className='standardsInfoSec'>
                  <span>2</span>
                  <h3>года Гарантия на ремонтые услуги</h3>
                </div>
              </div>
              <div data-aos="fade-up" className='standardsInfoContent d-flex'>
                <div className='standardsInfoSec'>
                  <span>20</span>
                  <h3>Опытных экспертов</h3>
                </div>
                <div className='standardsInfoSec'>
                  <span>10</span>
                  <h3>Завершенных проектов</h3>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* WHY US SECTION END */}
      <section id='ourProjects'>
        <div className="container">
          <div className='whyUsTitle_content'>
              <img data-aos="fade-up" src={PatternIcon} alt="..." />
              <h2 data-aos="fade-up">Наши проекты</h2>
          </div>
          <div data-aos="fade-up" id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark carouselContent" data-mdb-ride="carousel">
            <div className="carousel-indicators">
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="0"
                className="active"
                aria-current="true"
                aria-h2="Slide 1"
                ></button>
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="1"
                aria-h2="Slide 1"
                ></button>
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="2"
                aria-h2="Slide 1"
                ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" className="d-block w-100" alt="Motorbike Smoke"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide h2</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" className="d-block w-100" alt="Mountaintop"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide h2</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" className="d-block w-100" alt="Woman Reading a Book"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide h2</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* OUR PROJECTS SECTION END */}
      <section id="ourTeam"> 
        <div className="container">
          <div className='whyUsTitle_content ourTeamTitle'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Наша Команда</h2>
          </div>
          <div data-aos="fade-up" className="carousel_content">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper">
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={Team1} alt="..." /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* OUR TEAM END */}
      <section id="faq">
        <div className="container">
          <div className='whyUsTitle_content ourTeamTitle'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Частые Вопросы</h2>
          </div>
          <div data-aos="fade-up"  className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Сколько стоит дизайн проекта?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the first item's accordion body.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Когда лучше заказать проект? 
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Можно делать ремонт параллельно с разработкой дизайн-проекта?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Я не представляю какой стиль хочу получить, как быть в таком случае?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Сколько правок я могу внести?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Из чего состоит дизайн-проект? В каком виде я его получу?
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  Рабочие чертежи входят в стоимость дизайн-проекта?
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingeight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight" aria-expanded="false" aria-controls="flush-collapseeight">
                  Сколько по времени вы делаете дизайн-проект?
                </button>
              </h2>
              <div id="flush-collapseeight" className="accordion-collapse collapse" aria-labelledby="flush-headingeight" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">В среднем, разработка дизайн-проекта для квартиры занимает 1 - 1.5 месяца, а для коммерческого объекта требуется 2-3 месяца. Все в зависимости от квадратуры объекта.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ END */}
      <section id="contact">
        <div className="container">
          <div className='whyUsTitle_content contact'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Частые Вопросы</h2>
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
                <span>nafisinterlux@gmail.com</span>
              </div>
              <div data-aos="fade-up" className="contactInfoContent">
                <h3>SOCIAL MEDIA</h3>
                <span>@nafis_interlux</span>
              </div>
            </div>
            <img data-aos="fade-up" src={contactPhone} alt="..." />
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
      {/* CONTACT END */}
    </main>
    {/* MAIN */}
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
              <li><a data-aos="fade-up" href="#">nafisinterlux@gmail.com</a></li>
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
