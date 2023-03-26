import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Notfound from "./components/pages/Notfound/404";
import Main from "./components/pages/Main/main";
import Header from "./components/Header/Header";
import { EPATH } from "./data/constants";
import Forms from "./components/pages/Forms/Forms";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={EPATH.MAIN} element={<Main />} />
        <Route path={EPATH.ABOUT} element={<About />} />
        <Route path={EPATH.FORMS} element={<Forms />} />
        <Route path={EPATH.NOTFOUND} element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
