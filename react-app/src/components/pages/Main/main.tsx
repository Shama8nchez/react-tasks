import SearchBar from "./searchBar";
import { useState } from "react";
import Cards from "./card";
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM } from "../../../data/constants";
import { TData } from "../../../types";

function Main() {
  const [result, setResult] = useState([]);

  const onSubmitSearch = (data: TData): void => {
    fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${data.search}`)
      .then((rez) => rez.json())
      .then((rez) => {
        setResult(rez.results);
      });
  };

  return (
    <main>
      <SearchBar func={onSubmitSearch} />
      <Cards card={result} />
    </main>
  );
}

export default Main;
