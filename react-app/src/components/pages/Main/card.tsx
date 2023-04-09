import Loader from "../../utils/Load/Loader";
import { TCard } from "../../../types";

export function Card(props: {
  card: TCard;
  func: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className="card" id={`card-${props.card.id}`} onClick={props.func}>
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

function Cards(props: {
  card: TCard[];
  str: string;
  loading: boolean;
  func: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  if (props.card.length === 0) {
    return (
      <div className="cards">
        <Loader visible={props.loading} />
        <p className="cards-nofound">{props.str}</p>
      </div>
    );
  } else {
    return (
      <div className="cards">
        <Loader visible={props.loading} />
        {props.card.map((item) => (
          <Card card={item} key={item.id} func={props.func} />
        ))}
      </div>
    );
  }
}

export default Cards;
