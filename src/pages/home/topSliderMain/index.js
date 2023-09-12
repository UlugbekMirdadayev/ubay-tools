import { useRef, useCallback, useState, useEffect, useMemo } from "react";
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
      .get_sliders()
      .then(({ data }) => {
        if (data?.length) {
          dispatch(setSlider(data));
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

  const isSliderTypes = useMemo(()=> sliderData?.filter(slider=> slider?.sliderType === 1),[sliderData])

  return (
    <StyledImageSlider>
      <Swiper
        ref={sliderRef}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        onSlideChange={({ activeIndex }) => handleChangeSlide(activeIndex)}
      >
        {isSliderTypes?.length
          ? isSliderTypes?.map((slide) => (
              <SwiperSlide key={slide?._id} className="img">
                <Link to={slide?.link ? `/banner/${slide?.link}` : "#"}>
                  <img src={API.baseURL_IMAGE + slide?.image} alt="slider" />
                </Link>
              </SwiperSlide>
            ))
          : skeletionData.slider.map((key) => (
              <SwiperSlide key={key} className="img isLoading" />
            ))}
      </Swiper>

      <div className="pagination">
        {isSliderTypes.length
          ? isSliderTypes?.map((slide, index) => (
              <span
                key={slide?._id}
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
