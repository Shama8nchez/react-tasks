import { TCard } from "../../../types";

export function Card(props: { card: TCard }) {
  return (
    <div className="card">
      <img src={props.card.image} alt="book" className="card__img" />
      <h3 className="card__title">{props.card.name}</h3>
      <p className="card__species">Species: {props.card.species}</p>
      <p className="card__status">Status: {props.card.status}</p>
    </div>
  );
}

function Cards(props: { card: TCard[], str: string }) {
  if (props.card.length === 0) {
    return (
      <div className="cards">
        <p className="cards-nofound">{props.str}</p>
      </div>
    )
  } else {
    return (
      <div className="cards">
        {props.card.map((item) => (
          <Card card={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
