import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./index.css";

const RootRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default RootRoutes;
