import { useRef, useCallback, useState, useEffect } from "react";
import { StyledImageSlider } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setSlider } from "../../../redux/slider-slice";
import Selectors from "../../../redux/selectors";
import { API, skeletionData } from "../../../utils/constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function TopSliderMain() {
  const dispatch = useDispatch();
  const sliderData = Selectors.useSlider();
  const [active, setActive] = useState(0);
  const sliderRef = useRef();

  const handleChangeSlide = useCallback((index) => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideTo(index);
    setActive(index);
  }, []);

  const getSliderData = useCallback(() => {
    api
      .get_questions({ info_add: { type: 2 } })
      .then(({ data }) => {
        if (data.res_id === 200) {
          dispatch(setSlider(data?.result));
        } else {
          console.log(data);
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch]);

  useEffect(() => {
    getSliderData();
  }, [getSliderData]);

  return (
    <StyledImageSlider>
      <Swiper
        ref={sliderRef}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        onSlideChange={({ activeIndex }) => handleChangeSlide(activeIndex)}
      >
        {sliderData.length
          ? sliderData?.map((slide) => (
              <SwiperSlide key={slide?.ident} className="img">
                <Link to={`/banner/${slide?.name}`}>
                  <img src={API.baseURL_IMAGE + slide?.name} alt="slider" />
                </Link>
              </SwiperSlide>
            ))
          : skeletionData.slider.map((key) => (
              <SwiperSlide key={key} className="img isLoading" />
            ))}
      </Swiper>

      <div className="pagination">
        {sliderData.length
          ? sliderData?.map((slide, index) => (
              <span
                key={slide?.ident}
                onClick={() => handleChangeSlide(index)}
                className={index === active ? "active" : null}
              />
            ))
          : skeletionData.slider.map((key) => (
              <span key={key} className="isLoading" />
            ))}
      </div>
    </StyledImageSlider>
  );
}

export default TopSliderMain;
