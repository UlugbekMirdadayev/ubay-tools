import { useRef, useCallback, useState } from "react";
import { StyledImageSlider } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TopSliderMain() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef();

  const handleChangeSlide = useCallback((index) => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideTo(index);
    setActive(index);
  }, []);

  return (
    <StyledImageSlider>
      <Swiper ref={sliderRef} slidesPerView={"auto"} onSlideChange={({activeIndex}) => handleChangeSlide(activeIndex)}>
        {[0, 1, 2, 3, 4, 5].map((slide) => (
          <SwiperSlide key={slide} className="img">
            <img
              src="https://api.ubaytools.com/Images/b7287dd7839b8253f6ad450adc0ca8ac.png"
              alt="..."
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination">
        {[0, 1, 2, 3, 4, 5].map((slide) => (
          <span
            key={slide}
            onClick={() => handleChangeSlide(slide)}
            className={slide === active ? "active" : null}
          />
        ))}
      </div>
    </StyledImageSlider>
  );
}

export default TopSliderMain;
