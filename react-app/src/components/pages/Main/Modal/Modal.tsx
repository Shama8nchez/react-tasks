import React, { MouseEvent } from "react";
import st from "./Modal.module.css";
import Loader from "../../../utils/Load/Loader";
import { TCard } from "../../../../types";
import { useAppSelector, useAppDispatch } from "../../../../store/store";
import { closeModal } from "../../../../store/mainSlice";

const Modal = () => {
  const modal: boolean = useAppSelector((state) => state.main.modal);
  const character: TCard = useAppSelector((state) => state.main.character);
  const modalLoader: boolean = useAppSelector(
    (state) => state.main.modalLoader
  );

  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(closeModal());
  };

  const classModal = [st.modal];
  if (modal) {
    classModal.push(st.active);
  }

  return (
    <div className={classModal.join(" ")} onClick={close}>
      <div
        className={st.modal__content}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <Loader visible={modalLoader} />
        <span className={st.close} onClick={close}>
          x
        </span>
        <div className={st.modal__container}>
          <div>
            <img
              src={character.image}
              alt="book"
              className={st.modal__card_img}
            />
          </div>
          <div>
            <h3 className="card__title">{character.name}</h3>
            <p className="card__species">
              <strong>Species:</strong> {character.species}
            </p>
            <p className="card__status">
              <strong>Status:</strong> {character.status}
            </p>
            <p className="card__status">
              <strong>Gender:</strong> {character.gender}
            </p>
            <p className="card__status">
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p className="card__status">
              <strong>Location:</strong> {character.origin.name}
            </p>
            <p className="card__status">
              <strong>Created:</strong> {character.created.split("T")[0]}
            </p>
            <p className="card__status">
              <strong>Number of episodes:</strong>{" "}
              {`${character.created.length}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
