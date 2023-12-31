import React, { useCallback, useEffect, useRef } from "react";
import RootRoutes from "./routes";
import Header from "./components/header";
import Selectors from "./redux/selectors";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "./redux/loading-slice";
import { api } from "./api";
import { setCategories } from "./redux/categories-slice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowSize from "./utils/hooks";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = Selectors.useLoading();
  const { pathname } = useLocation();
  const app = useRef(null);

  useEffect(() => {
    app?.current?.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, app]);

  const getCategories = useCallback(() => {
    dispatch(setLoading(true));
    api
      .get_categories()
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data?.length) {
          dispatch(setCategories(data));
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.error(err?.code);
      });
  }, [dispatch]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const windowSize = useWindowSize();

  return (
    <div className="app scroll-custome" style={windowSize} ref={app}>
      <ToastContainer limit={4} autoClose={100} position={"top-center"} />
      {isLoading && (
        <div className={"loading"}>
          <div className="loader" />
        </div>
      )}
      <Header />
      {/* main components with scrollbar */}
      <RootRoutes />
      <Footer />
    </div>
  );
};

export default App;
