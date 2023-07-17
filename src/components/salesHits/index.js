import React from "react";
import { Change, Like } from "../icon";
import { StyledSalesHits } from "./styles";

function SalesHits() {
  return (
    <StyledSalesHits>
      <div className="sales">
        <h1>Хиты продаж</h1>
        <p>
          В нашем интернет-магазине представлен профессиональный инструмент и
          оборудование ведущих мировых производителей.
        </p>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <button>Садовая техника</button>
        ))}
      </div>
      <div className="motorcycle_cultivator">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div className="motorcycle_cultivator_card">
            <img
              src="https://api.ubaytools.com/Images/3c0dafacc66a74bf447e5c0c7aa77f30.webp"
              alt="..."
            />
            <h2>Мотокультиватор RD-GT790</h2>
            <button>Drell category</button>
            <h1>23 990 So’m</h1>
            <div className="motorcycle_cultivator_cart">
              <button>В корзину</button>
              <Change />
            </div>
            <div className="like_button">
              <Like />
            </div>
          </div>
        ))}
      </div>
    </StyledSalesHits>
  );
}

export default SalesHits;
