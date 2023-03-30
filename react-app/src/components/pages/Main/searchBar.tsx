import React, { useState, useEffect, useRef } from "react";

function getValue(): string {
  const value = localStorage.getItem("value");
  if (value) return value;
  return "";
}

function SearchBar() {
  const [value, setValue] = useState(getValue());

  const input = useRef(value)

  const setInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      setValue(e.currentTarget.value);
    }
  };

  useEffect(() => {
    input.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem("value", input.current);
    };
  }, []);

  return (
    <div className="search__container">
      <input
        type="text"
        className="search"
        value={value}
        onChange={setInput}
      />
      <button className="search__button">SEARCH</button>
    </div>
  );
}

export default SearchBar;
