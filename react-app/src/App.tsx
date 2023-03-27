import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { ROUTE } from "./data/constants";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {ROUTE.map(
          (item: { path: string; element: JSX.Element }, index: number) => (
            <Route
              path={item.path}
              element={item.element}
              key={`link${index}`}
            />
          )
        )}
      </Routes>
    </>
  );
}

export default App;
