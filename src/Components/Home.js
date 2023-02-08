import React from "react";
import "../styles.css";
import HeroBgVd from '../img/HeroBgVd.mp4'
import PatternIcon from '../img/pattern_icon.svg'
import ConfirmationIcon from '../img/confirmation_icon.svg'
import SxemaIcon from '../img/sxema_icon.svg'
import PlanIcon from '../img/plan_icon.svg'
import StarIcon from '../img/star_icon.svg'
import StandardsImg from '../img/standardsImg.png'
// import ProjectImg1 from '../img/project1.png'
// import ProjectImg2 from '../img/project2.png'
// import ProjectImg3 from '../img/project3.png'
// import ProjectImg4 from '../img/project4.png'
// import ProjectImg5 from '../img/project5.png'
// import ProjectImg6 from '../img/project6.png'
// import ProjectImg7 from '../img/project7.png'
// import ProjectImg8 from '../img/project8.png'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
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
                  <select className="form-select" required aria-label="select example">
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

          <div className='standardsContent d-flex justify-content-center align-items-center'>
            <img data-aos="fade-right" src={StandardsImg} alt="..." />
            <div className='standardsInfo'>
              <h2 data-aos="fade-up">Установливаем высокие стандарты</h2>
              <div data-aos="fade-left" className='standardsInfoContent d-flex'>
                <div className='standardsInfoSec'>
                  <span>15</span>
                  <h3>Лет опытa в отрасли строительства</h3>
                </div>
                <div className='standardsInfoSec'>
                  <span>2</span>
                  <h3>года Гарантия на ремонтые услуги</h3>
                </div>
              </div>
              <div data-aos="fade-left" className='standardsInfoContent d-flex'>
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
        </div>
      </section>
      {/* WHY US SECTION END */}

      <section id='ourProjects'>
        <div className="container">
          <div className='whyUsTitle_content'>
              <img data-aos="fade-up" src={PatternIcon} alt="..." />
              <h2 data-aos="fade-up">Наши проекты</h2>
          </div>
          <div data-aos="fade-up" id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark carouselContent" data-mdb-ride="carousel">
            <div class="carousel-indicators">
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                data-mdb-target="#carouselDarkVariant"
                data-mdb-slide-to="2"
                aria-label="Slide 1"
              ></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" class="d-block w-100" alt="Motorbike Smoke"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" class="d-block w-100" alt="Mountaintop"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="d-block w-100" alt="Woman Reading a Book"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>``
      {/* OUR PROJECTS SECTION END */}

      <section id="ourTeam"> 
        <div className="container">
        </div>
      </section>
    </>
  )
}
