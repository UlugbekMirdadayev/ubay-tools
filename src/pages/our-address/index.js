import React from "react";
import { OurAddressStyled } from "./style";
import { LocationIcon } from "../../components/icon";

const addresses = ["Строительный рынок Ўрикзор 3 блок", "Stroy Mall 1-этаж."];

const OurAddress = () => {
  return (
    <OurAddressStyled>
      <ul>
        {addresses.map((address) => (
          <li
            key={address}
            onClick={() => {
              window.open(`https://www.google.com/maps/search/${address}`);
            }}
          >
            <LocationIcon /> <span>{address}</span>
          </li>
        ))}
      </ul>
    </OurAddressStyled>
  );
};

export default OurAddress;
