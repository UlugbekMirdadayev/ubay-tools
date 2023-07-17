import React from "react";
import { StyledElectricSaws } from "./styled";

function ElectricSaws() {
  return (
    <StyledElectricSaws>
      {[0, 1, 2, 3, 4, 5].map((item) => {
        return (
          <div className="card_electric_saws">
            <div className="title">
              <h1>Elektro arralar</h1>
              <button>Batafsil</button>
            </div>
            <div className="saws_image">
              <img
                src="https://ubaytools.com/static/media/item1.efb0870565f2a2552f7e.png"
                alt="..."
              />
            </div>
          </div>
        );
      })}
    </StyledElectricSaws>
  );
}

export default ElectricSaws;
