import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Notfound from "./components/pages/Notfound/404";
import Main from "./components/pages/Main/main";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
