import React from 'react'
import HeroBgVd from '../img/HeroBgVd.mp4'
import PatternIcon from '../img/pattern_icon.svg'
import ConfirmationIcon from '../img/confirmation_icon.svg'
import SxemaIcon from '../img/sxema_icon.svg'
import PlanIcon from '../img/plan_icon.svg'
import StarIcon from '../img/star_icon.svg'
import StandardsImg from '../img/standardsImg.png'
import TestImg from '../img/test.svg'

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
            <img src={PatternIcon} alt="..." />
            <h2>Почему мы?</h2>
          </div>
          <div className='whyUs_content'>
            <div className='whyUs_card'>
              <img src={ConfirmationIcon} alt="..." />
              <h3>Квалифицированные специалисты</h3>
              <p>Принято считать, что специалисты стоят дорого, но если посчитать все издержки, возникшие от горе-мастеров, то в итоге выходит дешевле</p>
            </div>
            <div className='whyUs_card'>
              <img src={SxemaIcon} alt="..." />
              <h3>Точный расчет сметы</h3>
              <p>Профессиональный и точный расчет сметы работ позволит сократить общую сумму расходов на ремонт, в некоторых случаях на 40-60%</p>
            </div>
            <div className='whyUs_card'>
              <img src={PlanIcon} alt="..." />
              <h3>Составляем план этапов работы</h3>
              <p>Это поставляет сократить количество времени, которое заказчик тратит на согласование. Мы снимаем эту головную боль</p>
            </div>
            <div className='whyUs_card'>
              <img src={StarIcon} alt="..." />
              <h3>Договор и гарантии </h3>
              <p>Договор дисциплинирует и дает гарантин обеим сторонам мы несем полную отвественность и даем гарантии качественного исполнения в срок </p>
            </div>
          </div>

          <div className='standardsContent d-flex justify-content-center align-items-center'>
            <img src={StandardsImg} alt="..." />
            <div className='standardsInfo'>
              <h2>Установливаем высокие стандарты</h2>
              <div className='standardsInfoContent d-flex'>
                <div className='standardsInfoSec'>
                  <span>15</span>
                  <h3>Лет опытa в отрасли строительства</h3>
                </div>
                <div className='standardsInfoSec'>
                  <span>2</span>
                  <h3>года Гарантия на ремонтые услуги</h3>
                </div>
              </div>
              <div className='standardsInfoContent d-flex'>
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
        <div class="carousel-item">
          <img src={TestImg} alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>ksdklashfklahsfkl</h5>
            <p>...</p>
          </div>
        </div>
      </section>
    </>
  )
}
