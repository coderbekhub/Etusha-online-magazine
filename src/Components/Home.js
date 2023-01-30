import React from 'react'
import NavBar from './NavBar'
import HeroBgVideo from '../img/heroBgVideo.mp4'

export default function Home() {
  return (
    <>
      <NavBar />

      <section id='heroSection'>
        <div>
          <video className='heroVideo' src={HeroBgVideo} autoPlay loop muted />
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

                <div className="">
                  <input type="number" className="form-control is-valid" id="validationServer01" required placeholder='Ваш номер телефона' />
                </div>
                
                <div className="mb-3">
                  <select className="form-select" required aria-label="select example">
                    <option value="">Выберите вид услуги</option>
                    <option value="1">Шитье</option>
                    <option value="2">Парикмахер</option>
                    <option value="3">Химическая Очистка</option>
                  </select>
                  <div className="invalid-feedback">Пример недопустимого отзыва о выборе</div>
                </div>

                <div className="mb-3">
                  <textarea className="form-control" id="validationTextarea" placeholder="Requifred example textarea" required></textarea>
                  <div className="invalid-feedback">
                    Пожалуйста, введите сообщение в текстовую область.
                  </div>
                </div>
                <div>
                  <button className="btn bg-success heroFormSubmit" type="submit">Отправить</button>
                </div>
              </form>
            </div>
          </div>    
        </div>
      </section>
    </>
  )
}
