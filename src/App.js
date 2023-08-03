import React, { useEffect, useRef } from "react";
import RootRoutes from "./routes";
import Header from "./components/header";
import Selectors from "./redux/selectors";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";

const App = () => {
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
  return (
    <div className="app scroll-custome" ref={app}>
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
