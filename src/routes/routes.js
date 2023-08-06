import About from "../pages/about";
import Favorites from "../pages/favorites";
import Home from "../pages/home";
import News from "../pages/news";
import ProductSingle from "../pages/productSingle";
import TopProducts from "../pages/topProducts";

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
    path: "/top-products",
    element: <TopProducts />,
  },
  {
    path: "/product/:id",
    element: <ProductSingle />,
  },
];
