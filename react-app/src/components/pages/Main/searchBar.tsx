import { useForm } from "react-hook-form";
import { TData } from "types";
import { addQuery, fetchSubmit } from "../../../store/mainSlice";
import { useAppDispatch } from "../../../store/store";

function SearchBar() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TData>({
    reValidateMode: "onSubmit",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: TData) => {
    dispatch(fetchSubmit(data));
    dispatch(addQuery(data.search));
  };

  return (
    <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="search"
        {...register("search", {
          required: "Field is empty",
        })}
      />
      <input type="submit" value="SEARCH" className="search__button" />
      <div className="err">
        {errors?.search && <p>{errors?.search.message as string}</p>}
      </div>
    </form>
  );
}

export default SearchBar;
