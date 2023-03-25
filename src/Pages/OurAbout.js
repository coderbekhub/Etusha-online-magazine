import React from 'react'
import aboutImg1 from '../img/aboutImg1.png'
    
export default function ourAbout() {
  return (
    <>
      <section id='ourTeam1'>
        <div className="container">
          <div className='ourAboutContent'>
            <h2 data-aos="fade-up">О нас</h2>
            <p data-aos="fade-up">Современная студия интерьерного и экстерьерного дизайна  занимается созданием интерьеров и ремонтом под ключ, опираясь на функциональность и индивидуальность каждого клиента. Наша цель - сохранить ваше время и осуществить вашу мечту об уютном доме в реальность. Nafis - поможет создать интерьер без излишеств, наполненный элегантностью, в котором комфортно жить и работать.</p>
          </div>
          <div className='ourRectangle' data-aos="fade-up"></div>
          <div className='aboutContent'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo'> 
              <h3 data-aos="fade-up">Мухаммаддиер Баходиров</h3>
              <span data-aos="fade-up">Исполнительный директор</span>
              <p data-aos="fade-up">Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными.
              Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными деталями.
              </p>
            </div>
          </div>

          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div data-aos="fade-up" className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">Мухаммаддиер Баходиров</h3>
              <span data-aos="fade-up">Исполнительный директор</span>
              <p data-aos="fade-up">Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными.
              Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными деталями.
              </p>
            </div>
          </div>

          <div className='aboutContent'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo'> 
              <h3 data-aos="fade-up">Мухаммаддиер Баходиров</h3>
              <span data-aos="fade-up">Исполнительный директор</span>
              <p data-aos="fade-up">Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными.
              Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными деталями.
              </p>
            </div>
          </div>

          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">Мухаммаддиер Баходиров</h3>
              <span data-aos="fade-up">Исполнительный директор</span>
              <p data-aos="fade-up">Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными.
              Сочувствуя образу жизни наших клиентов, мы создали красивый уютный интерьер, в котором легкость жизни сочетается с изысканными деталями.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
