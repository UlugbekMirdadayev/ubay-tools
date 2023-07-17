import React from "react";
import { StyledImageSlider } from "./styles";

function TopSliderMain() {
  return (
    <StyledImageSlider>
      {[0, 1].map((item, i) => (
        <img
          src="https://api.ubaytools.com/Images/b7287dd7839b8253f6ad450adc0ca8ac.png"
          alt="..."
        />
      ))}
    </StyledImageSlider>
  );
}

export default TopSliderMain;
