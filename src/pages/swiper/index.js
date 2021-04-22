import React, { useState } from 'react'

import Swiper from '@/component/ux/Swiper/index'


const SwiperView = () => {




  const ITEMS = [
    'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
    'https://static.zhongan.com/website/health/zarm/images/banners/3.png',
  ];


  const onChange = (idx) => {
    console.log(idx, 'swiperIdx');
  }

  const renderContent = () => {
    return ITEMS.map((item, i) => {
      return (
        <div className="carousel__item__pic" key={+i}>
          <img src={item} alt="" draggable={false} />
        </div>
      );
    });
  }

  return (

    <div className='swiper-view'>



      <Swiper 
        onChange={onChange}
      >
        {renderContent()}
      </Swiper>
    </div>
  )
}


export default SwiperView