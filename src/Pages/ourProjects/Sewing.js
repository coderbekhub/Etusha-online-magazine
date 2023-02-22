import React from 'react'
import SewingImg from '../../img/sewingImg.png'
import SewingImg2 from '../../img/sewingImg2.png'
import SewingImg3 from '../../img/sewingImg3.png'
import SewingImg4 from '../../img/sewingImg4.png'
import SewingImg5 from '../../img/sewingImg5.png'
import SewingImg6 from '../../img/sewingImg6.png'
import SewingImg7 from '../../img/sewingImg7.png'
import SewingImg8 from '../../img/sewingImg8.png'

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

          <div className='sewingImg' data-aos="fade-up">
            <img data-aos="fade-up" src={SewingImg2} alt="..." />
            <p data-aos="fade-up">Учитывая желание клиента, Дизайн проект квартиры разработан в современном стиле, где также присутствуют элементы неоклассики. Главным пожеланием заказчика было максимально уютное и функциональное пространство с яркими элементами.</p>
          </div>

          <div className='sewingContent2' data-aos="fade-up">
            <div className='sewingInfo2'>
              <img data-aos="fade-up" src={SewingImg3} alt="..." />
              <img data-aos="fade-up" src={SewingImg4} alt="..." />
            </div>
            <p data-aos="fade-up">Стиль неоклассика в интерьере это универсальное сочетание благородства и возвышенной утонченности с современными материалами и актуальными дизайнерскими идеями. Этот стиль являет собой интерпретацию классических традиций в оформлении жилого пространства, на современный лад.</p>
          </div>

          <div className='sewingContent3'>
            <img className='sewingImg5' src={SewingImg5} alt="..." />
            <img className='sewingImg5' src={SewingImg6} alt="..." />
            <div className='sewingInfo3'>
              <img src={SewingImg7} alt="..." />
              <img src={SewingImg8} alt="..." />
              <p>При реализации подобного стилистического направления большую роль играют предметы мебели. Модель для подобных холлов должна быть украшена позолотой и резьбой. В качестве декора выступают мрамор, бронзовые накладки. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
