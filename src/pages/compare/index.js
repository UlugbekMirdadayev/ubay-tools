import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { CompareStyled } from "./style";
import Selectors from "../../redux/selectors";
import {
  API,
  currencyString,
  isSelectedProduct,
  removeDuplicates,
} from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import locale from "../../localization/locale.json";
import { Link } from "react-router-dom";
import { CloseArrow } from "../../components/icon";
import { setCompare, setCompareClear } from "../../redux/compare-slice";
import NotFound from "../../components/404";
import { api } from "../../api";

const Comparison = () => {
  const dispatch = useDispatch();
  const compareItems = Selectors.useCompare();
  const [products, setProducts] = useState([]);
  const lang = Selectors.useLang();
  const [data, setData] = useState([]);
  const sliderRef = useRef();
  const [panding, setTransition] = useTransition();
  const langData = useMemo(() => locale[lang]["compare"], [lang]);

  const getProducts = useCallback(() => {
    setData(products?.filter((product) => compareItems.includes(product.seo)));
  }, [compareItems, products]);

  useEffect(() => {
    if (!data.length) {
      setTransition(() => getProducts());
    }
  }, [getProducts, data.length]);

  const handleRemove = (seo) => {
    setData(data.filter((product) => product.seo !== seo));
    handleCompare(seo);
  };

  const handleGetProducts = useCallback(() => {
    if (products?.length) return;
    api
      .get("products", {})
      .then(({ data }) => {
        if (data?.length) {
          setProducts(data?.filter((prod) => prod?.inStock));
        } else {
          console.log(data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [products?.length]);

  const names = useMemo(() => {
    let arr = [];
    data.forEach((item) =>
      item?.compare?.map((cmp) =>
        arr.push(lang === "uz" ? cmp?.name_uz : cmp?.name_ru)
      )
    );
    return removeDuplicates(arr);
  }, [data, lang]);

  const handleCompare = (seo) => {
    dispatch(setCompare(seo));
  };

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  useEffect(() => {
    if (!compareItems?.length || !products?.length) return;
    compareItems
      ?.filter((seo) => !isSelectedProduct({ seo }, products))
      .forEach((item) => {
        dispatch(setCompare(item));
      });
  }, [compareItems, products, dispatch]);

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
            {data?.map((product) => (
              <SwiperSlide className="slide" key={product?.seo}>
                <button
                  className="remove"
                  onClick={() => handleRemove(product?.seo)}
                >
                  <CloseArrow />
                </button>
                <Link to={`/product/${product?.seo}`} className="product_photo">
                  <img
                    src={API.baseURL_IMAGE + product?.images}
                    alt="product_photo"
                  />
                </Link>
                <div className="info">
                  <li className="scroll-custome">
                    {lang === "uz"
                      ? product?.title_uz || product?.title
                      : product?.title}
                  </li>
                  <li>{currencyString(product?.price)}</li>
                </div>
                {names.map((key) => (
                  <li key={key} className="scroll-custome">
                    {product?.compare?.find(
                      (item) =>
                        item?.[lang === "uz" ? "name_uz" : "name_ru"] === key
                    )?.[lang === "uz" ? "desc_uz" : "desc_ru"] || "--"}
                  </li>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : panding ? null : (
        <div onClick={() => dispatch(setCompareClear())}>
          <NotFound />
        </div>
      )}
    </CompareStyled>
  );
};

export default Comparison;
