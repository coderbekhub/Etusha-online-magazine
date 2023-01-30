import React from 'react'
import NavBar from './NavBar'
import HeroBgVideo from '../img/heroBgVideo.mp4'

export default function Home() {
  return (
    <>
      <NavBar />

      <section id='heroSection'>
        <div>
          {/* <video className='heroVideo' src={HeroBgVideo} autoPlay loop muted /> */}
        </div>
        <div className="container">
          <div className='heroContent'>
            <h2 className='hero_title'>Функция, Комфорт, Элегантность.</h2>
            <div className='heroInfo'>
              <h3>Подать Заявку</h3>
              <form class="was-validated">
                <div class="">
                  <input type="text" class="form-control is-valid" id="validationServer01" required placeholder='Введите ваше имя' />
                </div>

                <div class="">
                  <input type="number" class="form-control is-valid" id="validationServer01" required placeholder='Ваш номер телефона' />
                </div>
                
                <div class="mb-3">
                  <select class="form-select" required aria-label="select example">
                    <option value="">Выберите вид услуги</option>
                    <option value="1">Шитье</option>
                    <option value="2">Парикмахер</option>
                    <option value="3">Химическая Очистка</option>
                  </select>
                  <div class="invalid-feedback">Пример недопустимого отзыва о выборе</div>
                </div>

                <div class="mb-3">
                  <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                  <div class="invalid-feedback">
                    Пожалуйста, введите сообщение в текстовую область.
                  </div>
                </div>


                <div>
                  <button className="btn bg-success text-warning" type="submit">Отправить</button>
                </div>
            </form>
            </div>
          </div>    
        </div>
      </section>
    </>
  )
}
