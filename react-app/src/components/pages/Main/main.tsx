import SearchBar from "./searchBar";
import { useState } from "react";
import Cards from "./card";
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM } from "../../../data/constants";
import { TData } from "../../../types";

function Main() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("");

  const onSubmitSearch = (data: TData): void => {
    setResult([]);
    setLoading("Wait...");
    fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${data.search}`)
      .then((rez) => rez.json())
      .then((rez) => {
        if (rez.results) {
          setResult(rez.results);
        } else setLoading("No result were found with this query");
      });
  };

  return (
    <main>
      <SearchBar func={onSubmitSearch} />
      <Cards card={result} str={loading}/>
    </main>
  );
}

export default Main;
