import React, { MouseEvent } from "react";
import st from "./Modal.module.css";
import Loader from "../../../utils/Load/Loader";
import { TCard } from "types";

const Modal = (props: {
  visible: boolean;
  loading: boolean;
  setVisible: (value: React.SetStateAction<boolean>) => void;
  data: TCard;
}) => {
  const classModal = [st.modal];

  if (props.visible) {
    classModal.push(st.active);
  }

  return (
    <div
      className={classModal.join(" ")}
      onClick={() => props.setVisible(false)}
    >
      <div
        className={st.modal__content}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <Loader visible={props.loading} />
        <img src={props.data.image} alt="book" className="card__img" />
        <h3 className="card__title">{props.data.name}</h3>
        <p className="card__species">Species: {props.data.species}</p>
        <p className="card__status">Status: {props.data.status}</p>
        <p className="card__status">Gender: {props.data.gender}</p>
        <p className="card__status">Origin: {props.data.origin.name}</p>
        <p className="card__status">Location: {props.data.origin.name}</p>
        <p className="card__status">Created: {props.data.created}</p>
        <p className="card__status">
          Episode: {`${props.data.created.length}`}
        </p>
      </div>
    </div>
  );
};

export default Modal;
