import React from "react";
import RootRoutes from "./routes";
import Header from "./components/header";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* main components with scrollbar */}
      <main>
        <RootRoutes />
      </main>
    </div>
  );
};

export default App;
