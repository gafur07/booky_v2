import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { routes } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
