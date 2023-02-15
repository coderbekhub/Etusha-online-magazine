import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import PatternIcon from '../img/pattern_icon.svg'
import "../main.css";
import ProjectImg1 from '../img/project1.png'
import ProjectImg2 from '../img/project2.png'
import ProjectImg3 from '../img/project3.png'
// import ProjectImg4 from '../img/project4.png'
// import ProjectImg5 from '../img/project5.png'
// import ProjectImg6 from '../img/project6.png'
// import ProjectImg7 from '../img/project7.png'
// import ProjectImg8 from '../img/project8.png'

export default function ProjectsSlide() {
  return (
    <>
      <section id='ourProjects'>
        <div className="container">
          <div className='whyUsTitle_content'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Наши проекты</h2>
          </div>
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper" data-aos="fade-up">
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
            <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
          </Swiper> */}

          <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-mdb-interval="10000">
                <img src={ProjectImg1} class="d-block w-100" alt="Wild Landscape"/>
              </div>
              <div class="carousel-item" data-mdb-interval="2000">
                <img src={ProjectImg2} class="d-block w-100" alt="Camera"/>
              </div>
              <div class="carousel-item">
                <img src={ProjectImg3} class="d-block w-100" alt="Exotic Fruits"/>
              </div>
            </div>
            <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
