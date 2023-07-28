import { useRef, useState } from "react";
import { StyledElectricSaws } from "./styled";
import Selectors from "../../redux/selectors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function ElectricSaws({ lang, langData }) {
  const categories = Selectors.useCategories();
  const [active, setActive] = useState(0);
  const sliderRef = useRef();


  return (
    <StyledElectricSaws
      className={active < 1 ? "after" : "before"}
    >
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        onSlideChange={({ activeIndex }) => setActive(activeIndex)}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category?.ident} className="card_electric_saws">
              <div className="title">
                <h1>{category[lang === "uz" ? "iconfile" : "name"]}</h1>
                <Link to={`/category/${category?.ident}`}>{langData.more}</Link>
              </div>
              <div className="saws_image">
                <img
                  src="https://ubaytools.com/static/media/item1.efb0870565f2a2552f7e.png"
                  alt="..."
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledElectricSaws>
  );
}

export default ElectricSaws;
