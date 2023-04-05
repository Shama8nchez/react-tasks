import { TCard } from "../../../types";

export function Card(props: { card: TCard }) {
  return (
    <div className="card">
      <p className="card__title">{props.card.name}</p>
      <img src={props.card.image} alt="book" className="card__img" />
      <p className="card__author">{props.card.status}</p>
      <p className="card__price">{props.card.species}</p>
    </div>
  );
}

function Cards(props: { card: TCard[] }) {
  return (
    <div className="cards">
      {props.card.map((item) => (
        <Card card={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
