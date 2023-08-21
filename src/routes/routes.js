import About from "../pages/about";
import Cart from "../pages/cart";
import Categoty from "../pages/category";
import Comparison from "../pages/compare";
import Wishes from "../pages/wishes";
import Home from "../pages/home";
import News from "../pages/news";
import OurAddress from "../pages/our-address";
import ProductSingle from "../pages/product-single";
import Production from "../pages/production";
import Profile from "../pages/profile";
import TopProducts from "../pages/topProducts";
import Warranty from "../pages/warranty";
import BookingOrder from "../pages/order-booking";
import NotFound from "../components/404";
import Banner from "../pages/banner";

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
    path: "/wishes",
    element: <Wishes />,
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
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:route",
    element: <Profile />,
  },
  {
    path: "/category/:id",
    element: <Categoty />,
  },
  {
    path: "/category/:main/:id",
    element: <Categoty />,
  },
  {
    path: "/order-booking",
    element: <BookingOrder />,
  },
  { path: "/banner/:id", element: <Banner /> },
  {
    path: "*",
    element: <NotFound />,
  },
];
