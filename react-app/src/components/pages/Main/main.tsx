import SearchBar from "./searchBar";
import { useEffect, useState } from "react";
import Cards from "./card";
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM } from "../../../data/constants";
import { TCard, TData } from "../../../types";
import Modal from "./Modal/Modal";
import { fetchRM, fetchSubmit } from "../../../store/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../store/store";

/* function Main() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState("");
  const [isModal, setModal] = useState(false);
  const [character, setCharacter] = useState<TCard>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
    episode: [],
    id: 0,
    created: "",
    url: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
  });
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);

  const showModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      setLoadingModal(true);
      setModal(!isModal);
      const target: string = e.currentTarget.id.slice(5);
      fetch(`${BASE_PATH}${SEARCH_PATH}/${target}`)
        .then((rez) => rez.json())
        .then((rez) => {
          setCharacter({
            id: rez.id,
            image: rez.image,
            name: rez.name,
            species: rez.species,
            status: rez.status,
            gender: rez.gender,
            type: rez.type,
            origin: rez.origin,
            location: rez.location,
            episode: rez.episodae,
            created: rez.created,
            url: rez.url,
          });
          setLoadingModal(false);
        });
    }
  };

  const onSubmitSearch = (data: TData): void => {
    setResult([]);
    setLoadingCards(true);
    setLoading("");
    fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${data.search}`)
      .then((rez) => rez.json())
      .then((rez) => {
        if (rez.results) {
          setResult(rez.results);
        } else setLoading("No result were found with this query");
        setLoadingCards(false);
      });
    localStorage.setItem("value", data.search);
  };

  useEffect(() => {
    setLoadingCards(true);
    fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARAM}=${getValue()}`)
      .then((rez) => rez.json())
      .then((rez) => {
        if (rez.results) {
          setResult(rez.results);
        } else setLoading("No result were found with this query");
        setLoadingCards(false);
      });
  }, []);

  return (
    <main>
      <Modal
        visible={isModal}
        loading={loadingModal}
        setVisible={setModal}
        data={character}
      />
      <SearchBar func={onSubmitSearch} />
      <Cards
        card={result}
        str={loading}
        func={showModal}
        loading={loadingCards}
      />
    </main>
  );
} */

function Main() {
  const dispatch = useAppDispatch();

  const [character, setCharacter] = useState<TCard>({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    image: "",
    episode: [],
    id: 0,
    created: "",
    url: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
  });

  //const [loadingCards, setLoadingCards] = useState(false);

/*   const showModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget) {
      setLoadingModal(true);
      setModal(!isModal);
      const target: string = e.currentTarget.id.slice(5);
      fetch(`${BASE_PATH}${SEARCH_PATH}/${target}`)
        .then((rez) => rez.json())
        .then((rez) => {
          setCharacter({
            id: rez.id,
            image: rez.image,
            name: rez.name,
            species: rez.species,
            status: rez.status,
            gender: rez.gender,
            type: rez.type,
            origin: rez.origin,
            location: rez.location,
            episode: rez.episodae,
            created: rez.created,
            url: rez.url,
          });
          setLoadingModal(false);
        });
    }
  }; */

  useEffect(() => {
    dispatch(fetchRM());
  }, [dispatch]);

  return (
    <main>
      <SearchBar />
      <Cards />
    </main>
  );
}

export default Main;
