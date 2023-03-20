import React from "react";

function getValue(): string {
  const value = localStorage.getItem("value");
  if (value) return value;
  return "";
}

class SearchBar extends React.Component {
  state = {
    value: getValue(),
  };

  setValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      this.setState({
        value: e.currentTarget.value,
      });
      setTimeout(() => localStorage.setItem("value", this.state.value), 0);
    }
  };

  render() {
    return (
      <div className="search__container">
        <input
          type="text"
          className="search"
          value={this.state.value}
          onChange={this.setValue}
        />
        <button className="search__button">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
