import Loader from "../../utils/Load/Loader";
import { TCard } from "../../../types";
import { useAppSelector } from "../../../store/store";

export function Card(props: {
  card: TCard;
}) {
  return (
    <div className="card" id={`card-${props.card.id}`}>
      <img src={props.card.image} alt="book" className="card__img" />
      <h3 className="card__title">{props.card.name}</h3>
      <p className="card__species">
        <strong>Species:</strong> {props.card.species}
      </p>
      <p className="card__status">
        <strong>Status:</strong> {props.card.status}
      </p>
    </div>
  );
}

function Cards() {
  const result: TCard[] = useAppSelector(state => state.main.result);
  const cardLoader: boolean = useAppSelector(state => state.main.cardLoader);

  if (result.length === 0) {
    return (
      <div className="cards">
        <Loader visible={cardLoader} />
        <p className="cards-nofound">No result were found with this query</p>
      </div>
    );
  } else {
    return (
      <div className="cards">
        <Loader visible={cardLoader} />
        {result.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
