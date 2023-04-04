import { COURSES } from "../../../data/constants";
import React, { Fragment, useState } from "react";
import { FormCard } from "./FormCard";
import { TProps, TForm } from "../../../types";
import { useForm } from "react-hook-form";

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

function Form() {
  const [card, setCard] = useState<TProps[]>([]);
  const [note, setNote] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: TForm): void => {
    console.log(data);
    const file = data.img[0];

    if (file) {
      const render = new FileReader();
      render.readAsDataURL(file);

      render.onload = function () {
        const src = render.result as string;

        setCard((prevCard) => [
          ...prevCard,
          {
            name: data.name,
            birth: data.birth,
            course: data.course,
            relocation: `${data.relocation ? "Ready for relocation" : ""}`,
            language: data.language,
            img: src,
          },
        ]);
      };

      setNote("Card was added");
      reset();

      setTimeout(() => setNote(""), 5000);
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          Enter your name:
          <span className="inputs">
            <input
              {...register("name", {
                required: "Field is empty",
                minLength: {
                  value: 2,
                  message: "min 2 letters",
                },
                pattern: /^[a-zA-Z ]{2,20}$/i,
              })}
              type="text"
              className="input-text"
            />
          </span>
        </label>
        <div className="err">
          {errors?.name && (
            <p>{(errors?.name.message as string) || "Use only letters"}</p>
          )}
        </div>

        <label className="label">
          Enter your birthday date:
          <span className="inputs">
            <input
              {...register("birth", {
                required: "Field is empty",
                validate: (date) => Date.parse(date) < Date.now(),
              })}
              type="date"
              className="input-date"
            />
          </span>
        </label>
        <div className="err">
          {errors?.birth && (
            <p>{(errors?.birth.message as string) || "Wrong date"}</p>
          )}
        </div>

        <label className="label">
          Choose a course:
          <span className="inputs">
            <select
              {...register("course", {
                required: "Choose a course",
              })}
              className="input-select"
            >
              {COURSES.map(({ id, course }) => (
                <option key={`course${id}`} value={`${id === 0 ? "" : course}`}>
                  {course}
                </option>
              ))}
            </select>
          </span>
        </label>
        <div className="err">
          {errors?.course && <p>{errors?.course.message as string}</p>}
        </div>

        <label className="label">
          Ready for relocation:
          <span className="inputs">
            <input
              {...register("relocation", {
                required: "You must be ready",
                validate: (date) => date === true,
              })}
              type="checkbox"
              className="input-checkbox"
            />
          </span>
        </label>
        <div className="err">
          {errors?.relocation && <p>{errors?.relocation.message as string}</p>}
        </div>

        <p className="label">
          What language do you prefer:
          <span className="inputs">
            {RADIO_INPUTS.map((item, index) => (
              <Fragment key={`radio${index}`}>
                <label>
                  <input
                    type="radio"
                    {...register("language", {
                      required: "Choose language",
                    })}
                    value={item.language}
                  />
                  {item.language}
                </label>
                <br />
              </Fragment>
            ))}
          </span>
        </p>
        <div className="err">
          {errors?.language && <p>{errors?.language.message as string}</p>}
        </div>

        <label className="label">
          Choose a file:
          <span className="inputs">
            <input
              {...register("img", {
                required: "Need image",
              })}
              type="file"
              accept="image/*"
              className="input-file"
            />
          </span>
        </label>
        <div className="err">
          {errors?.img && <p>{errors?.img.message as string}</p>}
        </div>

        <input type="submit" />
      </form>
      <p className="note">{note}</p>
      <div className="container">
        {card.map((item, index) => (
          <FormCard
            name={item.name}
            birth={item.birth}
            course={item.course}
            relocation={item.relocation}
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
