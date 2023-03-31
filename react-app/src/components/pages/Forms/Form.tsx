import { COURSES } from "../../../data/constants";
import React, { Fragment, useEffect, useState } from "react";
import { FormCard } from "./FormCard";
import { TProps } from "../../../types";

function Form() {
  const fileRef = React.createRef<HTMLInputElement>();
  const [textValue, setTextValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectValue, setSelectValue] = useState("Choose a course");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [card, setCard] = useState<TProps[]>([]);
  const [radioValue, setRadioValue] = useState("");
  const [note, setNote] = useState("");

  const inputLabelRef = React.createRef<HTMLLabelElement>();
  const dateLabelRef = React.createRef<HTMLLabelElement>();
  const selectLabelRef = React.createRef<HTMLLabelElement>();
  const radioRef = React.createRef<HTMLParagraphElement>();
  const checkboxRef = React.createRef<HTMLLabelElement>();
  const fileLabelRef = React.createRef<HTMLLabelElement>();
  const formRef = React.createRef<HTMLFormElement>();

  const RADIO_INPUTS = [
    {
      language: "English",
    },
    {
      language: "Russian",
    },
    {
      language: "Belarusian",
    },
  ];

  const textChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
  };

  const dateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDateValue(e.currentTarget.value);
  };

  const selectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value);
  };

  const checkboxChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  const radioChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRadioValue(e.currentTarget.value);
  };

  const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputLabelRef.current?.classList.remove("error");
    dateLabelRef.current?.classList.remove("error");
    radioRef.current?.classList.remove("error");
    fileLabelRef.current?.classList.remove("error");
    checkboxRef.current?.classList.remove("error");
    selectLabelRef.current?.classList.remove("error");

    const regex = new RegExp("^[a-zA-Z ]{2,20}$");

    if (!textValue.match(regex)) {
      inputLabelRef.current?.classList.add("error");
    }

    if (dateValue === "" || Date.parse(dateValue) > Date.now()) {
      dateLabelRef.current?.classList.add("error");
    }

    if (selectValue === "Choose a course") {
      selectLabelRef.current?.classList.add("error");
    }

    if (radioValue === "") {
      radioRef.current?.classList.add("error");
    }

    if (!checkboxValue) {
      checkboxRef.current?.classList.add("error");
    }

    if (fileRef.current?.files) {
      const file = fileRef.current?.files[0];
      if (!file) fileLabelRef.current?.classList.add("error");
      if (
        !file ||
        dateValue === "" ||
        Date.parse(dateValue) > Date.now() ||
        radioValue === "" ||
        !textValue.match(regex) ||
        !checkboxValue ||
        selectValue === "Choose a course"
      )
        return;
      const render = new FileReader();
      render.readAsDataURL(file);

      render.onload = function () {
        const src = render.result as string;

        setCard((prevCard) => [
          ...prevCard,
          {
            name: textValue,
            birthday: dateValue,
            course: selectValue,
            agree: checkboxValue
              ? "Ready for relocation"
              : "Not ready for relocation",
            language: radioValue,
            img: src,
          },
        ]);
        setNote("Card was added");

        setTextValue("");
        setDateValue("");
        setSelectValue("Choose a course");
        setCheckboxValue(false);
        setRadioValue("");
        formRef.current?.reset();
        setTimeout(() => setNote(""), 5000);
      };
    }
  };

  useEffect(() => {}, [card]);

  return (
    <Fragment>
      <form className="form" ref={formRef}>
        <label className="label" ref={inputLabelRef}>
          Enter your name:
          <span className="inputs">
            <input
              type="text"
              name="name"
              value={textValue}
              onChange={textChange}
              className="input-text"
            />
          </span>
        </label>

        <label className="label" ref={dateLabelRef}>
          Enter your birthday date:
          <span className="inputs">
            <input
              type="date"
              name="birth"
              value={dateValue}
              onChange={dateChange}
              className="input-date"
            />
          </span>
        </label>

        <label className="label" ref={selectLabelRef}>
          Choose a course:
          <span className="inputs">
            <select
              value={selectValue}
              onChange={selectChange}
              className="input-select"
            >
              {COURSES.map(({ id, course }) => (
                <option key={`course${id}`} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </span>
        </label>

        <label className="label" ref={checkboxRef}>
          Ready for relocation:
          <span className="inputs">
            <input
              type="checkbox"
              name="relocation"
              checked={checkboxValue}
              onChange={checkboxChange}
              className="input-checkbox"
            />
          </span>
        </label>

        <p className="label" ref={radioRef}>
          What language do you prefer:
          <span className="inputs">
            {RADIO_INPUTS.map((item, index) => (
              <Fragment key={`radio${index}`}>
                <label>
                  <input
                    type="radio"
                    name="language"
                    checked={radioValue === item.language}
                    value={item.language}
                    onChange={radioChange}
                  />
                  {item.language}
                </label>
                <br />
              </Fragment>
            ))}
          </span>
        </p>

        <label className="label" ref={fileLabelRef}>
          Choose file:
          <span className="inputs">
            <input ref={fileRef} type="file" name="file" accept="image/*" />
          </span>
        </label>

        <button onClick={handleShow}>SUBMIT</button>
      </form>
      <p className="note">{note}</p>
      <div className="container">
        {card.map((item, index) => (
          <FormCard
            name={item.name}
            birthday={item.birthday}
            course={item.course}
            agree={item.agree}
            language={item.language}
            img={item.img}
            key={`c${index}`}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Form;
