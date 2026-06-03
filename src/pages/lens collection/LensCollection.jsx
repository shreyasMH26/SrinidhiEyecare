import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function LensSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="/images/bluecut.jpg" alt="Blue Cut Lens" />
        <h3>💻 Blue Cut Lens</h3>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/singlevision.jpg" alt="Single Vision Lens" />
        <h3>👓 Single Vision Lens</h3>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/bifocal.jpg" alt="Bifocal Lens" />
        <h3>👓 Bifocal Lens</h3>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/rayban.jpg" alt="Ray Ban" />
        <h3>🕶 Ray-Ban Frames</h3>
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/fastrack.jpg" alt="Fastrack" />
        <h3>⚡ Fastrack Frames</h3>
      </SwiperSlide>
    </Swiper>
  );
}

export default LensSlider;