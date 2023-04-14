import SearchBar from "./searchBar";
import { useEffect } from "react";
import Cards from "./card";
import Modal from "./Modal/Modal";
import { fetchRM } from "../../../store/mainSlice";
import { useAppDispatch } from "../../../store/store";

function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRM());
  }, [dispatch]);

  return (
    <main>
      <Modal />
      <SearchBar />
      <Cards />
    </main>
  );
}

export default Main;
