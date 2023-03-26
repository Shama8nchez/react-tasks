import { COURSES } from "../../../data/constants";
import React, { Fragment } from "react";

type TProps = {
  name: string;
  birthday: string;
  course: string;
  agree: string;
  language: string;
  img: string;
};

const cards: TProps[] = [];

function FormCard(props: TProps) {
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

class Form extends React.Component {
  inputRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkRef = React.createRef<HTMLInputElement>();
  radioRefE = React.createRef<HTMLInputElement>();
  radioRefR = React.createRef<HTMLInputElement>();
  radioRefB = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();

  inputLabelRef = React.createRef<HTMLLabelElement>();
  dateLabelRef = React.createRef<HTMLLabelElement>();
  radioRef = React.createRef<HTMLLabelElement>();
  fileLabelRef = React.createRef<HTMLLabelElement>();

  state = {
    textValue: "",
    dateValue: "",
    selectValue: "React",
    checkBox: "",
    radio: "",
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { textValue, dateValue, selectValue, checkBox, radio } = this.state;

    const regex = new RegExp("^[a-zA-Z0-9]{2,20}$");

    if (textValue === "" || textValue.match(regex)) {
      this.inputLabelRef.current?.classList.add("error");
    }

    if (dateValue === "" || Date.parse(dateValue) > Date.now()) {
      this.dateLabelRef.current?.classList.add("error");
    }

    if (radio === "") {
      this.radioRef.current?.classList.add("error");
    }

    if (
      textValue === "" ||
      textValue.match(regex) ||
      dateValue === "" ||
      Date.parse(dateValue) > Date.now() ||
      radio === ""
    )
      return;

    if (this.fileRef.current?.files) {
      const file = this.fileRef.current?.files[0];
      if (!file) {
        this.fileLabelRef.current?.classList.add("error");
        return;
      }
      const render = new FileReader();
      render.readAsDataURL(file);

      render.onload = function () {
        const src = render.result as string;

        cards.push({
          name: textValue,
          birthday: dateValue,
          course: selectValue,
          agree: checkBox,
          language: radio,
          img: src,
        });
      };
    }

    setTimeout(
      () =>
        this.setState({
          textValue: "",
          dateValue: "",
          selectValue: "React",
          checkBox: "",
          radio: "",
        }),
      2000
    );
  };

  handleChange = () => {
    if (
      this.inputRef.current &&
      this.dateRef.current &&
      this.selectRef.current &&
      this.fileRef.current?.files
    ) {
      return this.setState({
        textValue: this.inputRef.current.value,
        dateValue: this.dateRef.current.value,
        selectValue: this.selectRef.current.value,
        checkBox: this.checkRef.current?.checked
          ? "Ready for relocation"
          : "Not ready for relocation",
        radio: this.radioRefE.current?.checked
          ? "English"
          : this.radioRefR.current?.checked
          ? "Russian"
          : "Belarusian",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <form className="form">
          <label ref={this.inputLabelRef} className="label">
            Enter your name:
            <span className="inputs">
              <input
                ref={this.inputRef}
                type="text"
                name="name"
                value={this.state.textValue}
                onChange={this.handleChange}
                className="input-text"
              />
            </span>
          </label>

          <label ref={this.dateLabelRef} className="label">
            Enter your birthday date:
            <span className="inputs">
              <input
                ref={this.dateRef}
                type="date"
                name="birth"
                value={this.state.dateValue}
                onChange={this.handleChange}
                className="input-date"
              />
            </span>
          </label>

          <label className="label">
            Choose a course:
            <span className="inputs">
              <select
                ref={this.selectRef}
                value={this.state.selectValue}
                onChange={this.handleChange}
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

          <label className="label">
            Ready for relocation:
            <span className="inputs">
              <input
                ref={this.checkRef}
                type="checkbox"
                name="relocation"
                /* checked={this.state.checkBox} */
                onChange={this.handleChange}
                className="input-checkbox"
              />
            </span>
          </label>

          <label ref={this.radioRef} className="label">
            What language do you prefer:
            <span className="inputs">
              <input
                ref={this.radioRefE}
                type="radio"
                name="language"
                value="English"
                onChange={this.handleChange}
              />
              English
              <br />
              <input
                ref={this.radioRefR}
                type="radio"
                name="language"
                value="Russian"
                onChange={this.handleChange}
              />
              Russian
              <br />
              <input
                ref={this.radioRefB}
                type="radio"
                name="language"
                value="Belarusian"
                onChange={this.handleChange}
              />
              Belarusian
            </span>
          </label>

          <label ref={this.fileLabelRef} className="label">
            Choose file:
            <span className="inputs">
              <input ref={this.fileRef} type="file" name="file" />
            </span>
          </label>

          <button onClick={this.handleShow}>Click</button>
        </form>
        <div className="container">
          {cards.map((item, index) => (
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
}

export default Form;
