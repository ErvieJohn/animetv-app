import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './AnimeSwiper.css';
import { Autoplay, Pagination } from 'swiper/modules';

function AnimeSwiper({topAiring}) {
  const maxTextLength = 300;

  function getRandomLightColor() {
    // Generate a random light color
    const r = Math.floor(Math.random() * 156 + 100); // Red
    const g = Math.floor(Math.random() * 156 + 100); // Green
    const b = Math.floor(Math.random() * 156 + 100); // Blue
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Keep autoplay after user interactions
        }}
        slidesPerView={1} // Show only one image at a time
        // spaceBetween={10}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className='image-container'
      >
          {topAiring.map((src, index) => (
            <SwiperSlide key={index} style={{zIndex: 1}}>
              <img src={src.image} alt={`${src.title}`} className="image-effect"/>
              <div className='main-content'>
                <img src={src.image} alt={`${src.title}`} className="main-image"/>
                <div style={{maxWidth: "20%", textAlign: 'start'}}>
                  <p>No. {index + 1} Trending</p>
                  <h1>{src.title}</h1>
                  {src.description.length > maxTextLength ? (<p className='description'>{src.description.slice(0, maxTextLength) + '...'}</p>):(<p className='description'>{src.description}</p>)}
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: "center", gap: "3%", maxWidth: "20%"}}>
                    {src.genres.map((genres, index)=>(
                      <p className='genres-list' style={{backgroundColor: getRandomLightColor()}} key={`genres-${index}`}>{genres}</p>
                    ))}
                  </div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
  )
}

export default AnimeSwiper