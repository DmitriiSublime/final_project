import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import home from "./sigin.svg";
import signup from "./sigup.svg";
import thief from "./thief.png";
import "./home.css";

export const Home = () => {
  return (
    <main className="home">
      <h1>У Вас имеется желание покататься на велосипеде?</h1>
        <h2>Сообщите нам!</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <p>Если хотите арендовать велосипед обращайтесь к нам</p>
            <img className="ride" src={home} alt="bike" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <p>У наc лучшие цены и лучшие велосипеды!</p>
            <img src={thief} alt="thief" />
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <p>Подать заявку на прокат велосипеда можно через сайт</p>
            <img src={signup} alt="thief" />
          </div>
          </SwiperSlide>
      </Swiper>
      
    </main>
  );
};