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
        <div className={st.modal__container}>
          <div>
            <img
              src={props.data.image}
              alt="book"
              className={st.modal__card_img}
            />
          </div>
          <div>
            <h3 className="card__title">{props.data.name}</h3>
            <p className="card__species">
              <strong>Species:</strong> {props.data.species}
            </p>
            <p className="card__status">
              <strong>Status:</strong> {props.data.status}
            </p>
            <p className="card__status">
              <strong>Gender:</strong> {props.data.gender}
            </p>
            <p className="card__status">
              <strong>Origin:</strong> {props.data.origin.name}
            </p>
            <p className="card__status">
              <strong>Location:</strong> {props.data.origin.name}
            </p>
            <p className="card__status">
              <strong>Created:</strong> {props.data.created.split("T")[0]}
            </p>
            <p className="card__status">
              <strong>Number of episodes:</strong>{" "}
              {`${props.data.created.length}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
