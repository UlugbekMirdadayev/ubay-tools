import About from "../pages/about";
import Cart from "../pages/cart";
import Comparison from "../pages/compare";
import Favorites from "../pages/favorites";
import Home from "../pages/home";
import News from "../pages/news";
import OurAddress from "../pages/our-address";
import ProductSingle from "../pages/productSingle";
import Production from "../pages/production";
import TopProducts from "../pages/topProducts";
import Warranty from "../pages/warranty";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <News />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/top-products",
    element: <TopProducts />,
  },
  {
    path: "/product/:id",
    element: <ProductSingle />,
  },
  {
    path: "/our-address",
    element: <OurAddress />,
  },
  {
    path: "/warranty",
    element: <Warranty />,
  },
  {
    path: "/production",
    element: <Production />,
  },
  {
    path: "/compare",
    element: <Comparison />,
  },
];
