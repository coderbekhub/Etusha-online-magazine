import React from 'react'
import aboutImg1 from '../img/aboutImg1.png'
import { useTranslation } from 'react-i18next';
    
export default function ourAbout() {
  const { t } = useTranslation();
  return (
    <>
      <section id='ourTeam1'>
        <div className="container">
          <div className='ourAboutContent'>
            <h2 data-aos="fade-up">{t('ourAboutUs')}</h2>
            <p data-aos="fade-up">{t('ourAboutUsText')}</p>
          </div>
          <div className='ourRectangle' data-aos="fade-up"></div>
          <div className='aboutContent'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamTask')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>

          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div data-aos="fade-up" className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamTask')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>

          <div className='aboutContent'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamTask')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>

          <div className='aboutContent rowReverse'>
            <img data-aos="fade-up" src={aboutImg1} alt="..." />
            <div className='aboutInfo rowReverseContent'> 
              <h3 data-aos="fade-up">{t('TeamName')}</h3>
              <span data-aos="fade-up">{t('TeamName')}</span>
              <p data-aos="fade-up">{t('TeamText')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
