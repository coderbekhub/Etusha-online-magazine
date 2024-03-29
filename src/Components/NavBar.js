import React from 'react'
import Brand from '../img/brand-removebg.png'
import Globus from '../img/globus.png'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const {t} = useTranslation()

  const language = [
    {
      code: 'kr',
      name1: 'Ўзбек',
      countryCode: 'kr'
    },
    {
      code: 'uz',
      name1: 'O‘zbek',
      countryCode: 'uz'
    },
    {
      code: 'ru',
      name1: 'Русский',
      countryCode: 'ru'
    },
    {
      code: 'en',
      name1: 'English',
      countryCode: 'us'
    }
  ]
  return (
    <>
      <nav id='navBar' className='nav_bar'>
        <div className="container">
          <ul className='navList'>
            <li>
              <a href="#">
                <img src={Brand} alt="..." width={130} height={130} />
              </a>
            </li>
            <li><Link to="/" className="nav_link">{t('Home')}</Link></li>
            <li><Link to="/ourAbout" className="nav_link">{t('OurTeam')}</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link nav_link mediaLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('OurProjects')}
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item mediaDropLink" to="/sewing"> {t('Sewing')} </Link></li>
                <li><Link className="dropdown-item mediaDropLink" to="/hairdresser">{t('Hairdresser')}</Link></li>
                <li><Link className="dropdown-item mediaDropLink" to="/chemicalCleaning"> {t('ChemicalCleaning')} </Link></li>
              </ul>
            </li>
            <li><Link to="/Contact" className="nav_link"> {t('Contact')} </Link></li>
            <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Globus} alt="..." width={20} height={20} />
            </button>
            <ul className="dropdown-menu">
              {language.map(({code, name1, countryCode}) => (
                <li key={countryCode}>
                  <button className='dropdown-item' 
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span className={`flag-icons flag-icons-${countryCode}`}></span>&nbsp;
                    {/* <span className='fi fi-uz'></span>&nbsp; */}
                    {name1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          </ul>
        </div>
      </nav>

      <nav className="navbar fixed-top navBar_Media ">
        <div className="container-fluid container">
          <a className="navbarBrand" href="#">
            <img src={Brand} alt="..." width={60} height={60} />
          </a>
          <button className="navbar-toggler link-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="media_list offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mediaTitle" id="offcanvasNavbarLabel">ETUSHA</h5>
              <div className="dropdown" id='dropDown'>
                <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={Globus} alt="..." width={20} height={20} />
                </button>
                <ul className="dropdown-menu">
                  {language.map(({code, name1, countryCode}) => (
                    <li key={countryCode}>
                      <button className='dropdown-item' 
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <span className={`flag-icons flag-icons-${countryCode}`}></span>&nbsp;
                        {name1}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button type="button" className="btn-close mediaClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link mediaLink" aria-current="page" to='/'>{t('Home')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mediaLink" to="/ourAbout">{t('OurTeam')}</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link mediaLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('OurProjects')}
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item mediaDropLink" to="/sewing">{t('Sewing')}</Link></li>
                    <li><Link className="dropdown-item mediaDropLink" to="/hairdresser">{t('Hairdresser')}</Link></li>
                    <li><Link className="dropdown-item mediaDropLink" to="/chemicalCleaning">{t('ChemicalCleaning')}</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mediaLink" to="/Contact">{t('Contact')}</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link mediaLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('Services')}
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item mediaDropLink" to="/sewing">{t('Sewing')}</Link></li>
                    <li><Link className="dropdown-item mediaDropLink" to="/hairdresser">{t('Hairdresser')}</Link></li>
                    <li><Link className="dropdown-item mediaDropLink" to="/chemicalCleaning">{t('ChemicalCleaning')}</Link></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder={t('SiteSearch')} aria-label="Search" />
                <button className="btn btn-outline-success link-light mediaSearch" type="submit">{t('Search')}</button>
              </form>
            </div>
            <div className='heroInfo' id='heroInfo'>
              <h3 className='heroInfo_title'>{t('ArizaniYuborish')}</h3>
              <form className="was-validated heroForm">
                <div className="">
                  <input type="text" className="form-control is-valid" id="validationServer01" required placeholder={t('FormName')} />
                </div>
                <div>
                  <input type="number" className="form-control is-valid" id="validationServer01" required placeholder={t('FormNum')} />
                </div>
                <div className="mb-3">
                  <select className="form-select" required aria-label="select example">
                    <option value="">{t('XizmatTuri')}</option>
                    <option value="1">{t('Sewing')}</option>
                    <option value="2">{t('Hairdresser')}</option>
                    <option value="3">{t('ChemicalCleaning')}</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="validationTextarea" placeholder={t('Habaringiz')} required></textarea>
                </div>
                <div>
                  <button className="btn bg-success heroFormSubmit" type="submit"> {t('Send')} </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
