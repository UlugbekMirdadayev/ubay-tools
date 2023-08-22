import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CompareStyled } from "./style";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { API, currencyString, removeDuplicates } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import locale from "../../localization/locale.json";
import { Link } from "react-router-dom";
import { CloseArrow } from "../../components/icon";
import { setCompare } from "../../redux/compare-slice";
import { toast } from "react-toastify";
import NotFound from "../../components/404";

const Comparison = () => {
  const dispatch = useDispatch();
  const compareItems = Selectors.useCompare();
  const lang = Selectors.useLang();
  const [data, setData] = useState([]);
  const sliderRef = useRef();
  const langData = useMemo(() => locale[lang]["compare"], [lang]);

  const getProducts = useCallback(() => {
    api
      .get_basket({
        list_withid: {
          params: compareItems.map((ident) => ({ pro_ident: ident })),
        },
      })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          setData(data?.result);
        } else {
          console.log(data);
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [compareItems]);

  useEffect(() => {
    if (!data.length) {
      getProducts();
    }
  }, [getProducts, data.length]);

  const handleRemove = (ident) => {
    setData(data.filter((product) => product.pro_ident !== ident));
    handleCompare(ident);
  };

  const names = useMemo(() => {
    let arr = [];
    data.forEach((item) =>
      item.parametrs.map(({ name, comment }) =>
        arr.push(lang === "uz" ? comment : name)
      )
    );
    return removeDuplicates(arr);
  }, [data, lang]);

  const handleCompare = (ident) => {
    dispatch(setCompare(+ident));
  };

  return (
    <CompareStyled>
      <h1 className="title">{langData.title}</h1>
      {data?.length ? (
        <div className="grid">
          <ul className="sidebar">
            <div className="product_photo" />
            <div className="info">
              <li>{langData.name}</li>
              <li>{langData.price}</li>
            </div>
            {names.map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
          <Swiper ref={sliderRef} slidesPerView={"auto"} className="slider">
            {data.map((product) => (
              <SwiperSlide className="slide" key={product?.pro_ident}>
                <button
                  className="remove"
                  onClick={() => handleRemove(product?.pro_ident)}
                >
                  <CloseArrow />
                </button>
                <Link
                  to={`/product/${product?.pro_ident}`}
                  className="product_photo"
                >
                  <img
                    src={API.baseURL_IMAGE + product?.photo}
                    alt="product_photo"
                  />
                </Link>
                <div className="info">
                  <li className="scroll-custome">{product.name}</li>
                  <li>{currencyString(product?.main_price)}</li>
                </div>
                {names.map((key) => (
                  <li key={key} className="scroll-custome">
                    {product?.parametrs?.find(
                      (item) => item[lang === "uz" ? "comment" : "name"] === key
                    )?.value || "--"}
                  </li>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <NotFound />
      )}
    </CompareStyled>
  );
};

export default Comparison;
