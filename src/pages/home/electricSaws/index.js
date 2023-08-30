import { useRef, useState, useCallback } from "react";
import { StyledElectricSaws } from "./styled";
import Selectors from "../../../redux/selectors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { SlideArrow } from "../../../components/icon";
import {API, skeletionData} from "../../../utils/constants"

function ElectricSaws({ lang, langData }) {
  const {categories} = Selectors.useCategories();
  const [active, setActive] = useState(0);
  const sliderRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <StyledElectricSaws className={active < 1 ? "after" : "before"}>
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        className="slider_cont"
        onSlideChange={({ activeIndex }) => setActive(activeIndex)}
      >
        {categories?.length ? categories.map((category) => (
          <SwiperSlide key={category?._id} className="card_electric_saws">
            <div className="title">
              <h1>{category[lang === "uz" ? "title_uz" : "title"]}</h1>
              <Link to={`/category/${category?.seo}`}>{langData.more}</Link>
            </div>
            <div className="saws_image">
              <img
                src={API.baseURL_IMAGE + category?.image}
                alt="..."
              />
            </div>
          </SwiperSlide>
        )): skeletionData.categories.map((key) => (
          <SwiperSlide  key={key} className="card_electric_saws isLoading" />
        ))}
      </Swiper>
      <div className="mb-controller">
        <button onClick={handlePrev}>
          <SlideArrow position="left" />
        </button>
        <button onClick={handleNext}>
          <SlideArrow position="right" />
        </button>
      </div>
    </StyledElectricSaws>
  );
}

export default ElectricSaws;
