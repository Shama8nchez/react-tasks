import { TProps } from "./../../../types";

export function FormCard(props: TProps) {
  return (
    <div className="container-item">
      <img src={props.img} alt="card" className="file" />
      <p>{props.name}</p>
      <p>{props.birth}</p>
      <p>{props.course}</p>
      <p>{props.relocation}</p>
      <p>{props.language}</p>
    </div>
  );
}
