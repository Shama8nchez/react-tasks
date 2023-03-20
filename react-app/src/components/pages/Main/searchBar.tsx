import React from "react";

function getValue(): string {
  const value = localStorage.getItem("value");
  if (value) return value;
  return "";
}

class SearchBar extends React.Component<
  Record<string, never>,
  { value: string }
> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      value: getValue(),
    };

    addEventListener("beforeunload", () => {
      const val = this.state.value;
      localStorage.setItem("value", val);
    });
  }

  componentWillUnmount(): void {
    const val = this.state.value;
    localStorage.setItem("value", val);
  }

  setValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      this.setState({
        value: e.currentTarget.value,
      });
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
