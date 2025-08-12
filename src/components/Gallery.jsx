import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const photos = [
  'https://picsum.photos/id/1011/600/400',
  'https://picsum.photos/id/1012/600/400',
  'https://picsum.photos/id/1013/600/400',
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log('Swiper modules:', Navigation, Pagination);

  return (
    <div className="gallery-container row" style={{ maxWidth: 800, margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
      >
        {photos.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              alt={`Photo ${i + 1}`}
              style={{ width: '100%', borderRadius: 12, cursor: 'pointer' }}
              onClick={() => setSelectedPhoto(url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
