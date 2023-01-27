import React from 'react'
import Brand from '../img/brand-removebg.png'

export default function NavBar() {
  return (
    <>
      <nav id='navBar'>
        <div className="container">
          <a href="#">
            <img src={Brand} alt="..." width={150} height={150} />
          </a>
          <ul>
            <li><a href="#" className="nav_link"></a></li>
            <li><a href="#" className="nav_link"></a></li>
            <li><a href="#" className="nav_link"></a></li>
            <li><a href="#" className="nav_link"></a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
