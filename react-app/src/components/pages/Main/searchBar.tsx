import { useForm } from "react-hook-form";
import { TData } from "types";

function SearchBar(props: { func: (data: TData) => void }) {
  const { register, handleSubmit } = useForm<TData>();

  const onSubmit = props.func;

  return (
    <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" className="search" {...register("search")} />
      <input type="submit" value="SEARCH" className="search__button" />
    </form>
  );
}

export default SearchBar;
