import React from 'react'
import Brand from '../img/brand-removebg.png'
import Globus from '../img/globus.png'
import Uz from '../img/uz.png'
import Ru from '../img/ru.png'

export default function NavBar() {
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
            <li><a href="#" className="nav_link">Главный</a></li>
            <li><a href="#" className="nav_link">О нас</a></li>
            <li><a href="#" className="nav_link">Наши проекты</a></li>
            <li><a href="#" className="nav_link">Контакты</a></li>
            <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Globus} alt="..." width={20} height={20} />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item nav_lang" href="#">
                  <img src={Uz} alt="..."/> 
                  O'zbek
                </a></li>
              <li>
                <a className="dropdown-item nav_lang" href="#">
                  <img src={Ru} alt="..."/> 
                  Русский
                </a>
              </li>
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
          <div className="media_list offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mediaTitle" id="offcanvasNavbarLabel">ETUSHA</h5>
              <button type="button" className="btn-close mediaClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mediaLink" aria-current="page" href="#">Главный</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mediaLink" href="#">О нас</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mediaLink" href="#">Наши проекты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mediaLink" href="#">Контакты</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link mediaLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Сервисы
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item mediaDropLink" href="#">Шитье</a></li>
                    <li><a className="dropdown-item mediaDropLink" href="#">Парикмахер</a></li>
                    <li><a className="dropdown-item mediaDropLink" href="#">Химическая Очистка</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Поиск по сайту" aria-label="Search" />
                <button className="btn btn-outline-success link-light mediaSearch" type="submit">Поиск</button>
              </form>
            </div>
            <div className='heroInfo' id='heroInfo'>
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
      </nav>

    </>
  )
}
