import { TProps } from "./../../../types";

export function FormCard(props: TProps) {
  return (
    <div className="container-item">
      <img src={props.img} alt="card" className="file" />
      <p>{props.name}</p>
      <p>{props.birthday}</p>
      <p>{props.course}</p>
      <p>{props.agree}</p>
      <p>{props.language}</p>
    </div>
  );
}
