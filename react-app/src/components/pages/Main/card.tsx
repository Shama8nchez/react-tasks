import { data } from "./data";
import { TCard } from "types";

export function Card(props: { card: TCard }) {
  return (
    <div className="card">
      <p className="card__title">{props.card.title}</p>
      <img src={props.card.source} alt="book" className="card__img" />
      <p className="card__author">{props.card.produced}</p>
      <p className="card__price">{props.card.release}</p>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards">
      {data.map((item) => (
        <Card card={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
