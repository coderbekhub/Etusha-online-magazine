import React from 'react'
import Brand from '../img/brand-removebg.png'

export default function NavBar() {
  return (
    <>
      <nav id='navBar'>
        <div className="container">
          <a href="#">
          </a>
          <ul className='navList'>
            <li>
              <a href="#">
                <img src={Brand} alt="..." width={150} height={150} />
              </a>
            </li>
            <li><a href="#" className="nav_link">Главный</a></li>
            <li><a href="#" className="nav_link">О нас</a></li>
            <li><a href="#" className="nav_link">Наши проекты</a></li>
            <li><a href="#" className="nav_link">Контакты</a></li>
          </ul>
        </div>
      </nav>
      <nav class="navbar bg-light fixed-top navBar_Media">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img src={Brand} alt="..." width={60} height={60} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ETUSHA</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Главный</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">О нас</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Наши проекты</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Контакты</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Сервисы
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Шитье</a></li>
                    <li><a className="dropdown-item" href="#">парикмахер</a></li>
                    <li><a className="dropdown-item" href="#">химическая очистка</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
