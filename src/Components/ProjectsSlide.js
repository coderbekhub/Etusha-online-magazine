import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { EffectCreative } from "swiper";
import PatternIcon from '../img/pattern_icon.svg'
import "../main.css";
import ProjectImg1 from '../img/project1.png'
import ProjectImg2 from '../img/project2.png'
import ProjectImg3 from '../img/project3.png'

export default function ProjectsSlide() {
  return (
    <>
      <section id='ourProjects'>
        <div className="container">
          <div className='whyUsTitle_content'>
            <img data-aos="fade-up" src={PatternIcon} alt="..." />
            <h2 data-aos="fade-up">Наши проекты</h2>
          </div>
          <div data-aos="fade-up" className="carousel_content">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2">
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
            </Swiper>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2">
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
            </Swiper>
            <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper2">
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg1} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg2} alt="..." /></SwiperSlide>
              <SwiperSlide><img src={ProjectImg3} alt="..." /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
