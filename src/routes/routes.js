import About from "../pages/about";
import Favorites from "../pages/favorites";
import Home from "../pages/home";
import News from "../pages/news";

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
];
