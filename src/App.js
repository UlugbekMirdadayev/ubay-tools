import React from "react";
import RootRoutes from "./routes";
import Header from "./components/header";
import Selectors from "./redux/selectors";

const App = () => {
  const { isLoading } = Selectors.useLoading();
  return (
    <div className="app">
      {isLoading && <div className={"loading"} />}
      <Header />
      {/* main components with scrollbar */}
      <RootRoutes />
    </div>
  );
};

export default App;
