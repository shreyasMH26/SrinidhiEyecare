import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bluecut from "../assets/blue cut lens.jpg";
import singlevision from "../assets/single vision lens.jpg";
import bifocal from "../assets/bifocal lens.jpg";
import antiglare from "../assets/anti glare lens.jpg";
import photochromic from "../assets/photochromic lens.jpg";

function LensSlider() {
  return (
    <div className="sliderContainer">

      <Swiper spaceBetween={20} slidesPerView={1}>

        <SwiperSlide>
         <img 
         src={bluecut} 
         alt="Blue Cut Lens" 
         style={{ width: "100%", height: "auto" , border:"3px solid red"}}

         />
          <h3>Blue Cut Lens</h3>
        </SwiperSlide>

        <SwiperSlide>
         <img 
         src={singlevision} 
         alt="Single Vision Lens" 
         style={{ width: "100%", height: "auto" , border:"3px solid red"}}
         />
          <h3>Single Vision Lens</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img 
          src={bifocal} 
          alt="Bifocal Lens" 
          style={{ width: "100%", height: "auto" , border:"3px solid red"}}
          />

          <h3>Bifocal Lens</h3>
        </SwiperSlide>

        <SwiperSlide>
         <img 
         src={antiglare} 
         alt="Anti Glare Lens" 
         style={{ width: "100%", height: "auto" , border:"3px solid red"}}
         />
          <h3>Anti Glare Lens</h3>
        </SwiperSlide>

        <SwiperSlide>
         <img 
         src={photochromic} 
         alt="Photochromic Lens" 
         style={{ width: "100%", height: "auto" , border:"3px solid red"}}
         />
          <h3>Photochromic Lens</h3>
        </SwiperSlide>
        

        {/* Frames */}
       

      </Swiper>

    </div>
  );
}

export default LensSlider;