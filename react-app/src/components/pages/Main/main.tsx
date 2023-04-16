import SearchBar from "./searchBar";
import { useEffect } from "react";
import Cards from "./card";
import Modal from "./Modal/Modal";
import { fetchRM } from "../../../store/mainSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

function Main() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.main.query);

  useEffect(() => {
    dispatch(fetchRM(query));
  }, [dispatch, query]);

  return (
    <main>
      <Modal />
      <SearchBar />
      <Cards />
    </main>
  );
}

export default Main;
