import React from "react";
import RootRoutes from "./routes";
import Header from "./components/header";
import Selectors from "./redux/selectors";
import Footer from "./components/footer";

const App = () => {
  const { isLoading } = Selectors.useLoading();
  return (
    <div className="app scroll-custome">
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
