import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    const savedCount = JSON.parse(window.localStorage.getItem("count"));
    const userName = JSON.parse(window.localStorage.getItem("name"));

    this.state = {
      count: savedCount || 0,
      name: userName || "Sardorbek",
    };
  }
  render() {
    const Add = () => {
      if (this.state.count < 10000000) {
        this.setState({ count: this.state.count + 1 });
        window.localStorage.setItem(
          "count",
          JSON.stringify(this.state.count + 1)
        );
      } else {
        alert("Max num");
      }
    };
    const Reset = () => {
      this.setState({ count: 0 });
      window.localStorage.setItem("count", JSON.stringify(0));
    };
    const Remove = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
        window.localStorage.setItem(
          "count",
          JSON.stringify(this.state.count - 1)
        );
      } else {
        alert("you can't delete anymore");
      }
    };
    const onUserName = (evt) => {
      let userName = evt.target?.value;
      if (userName) {
        this.setState({ name: userName });
        window.localStorage.setItem("name", JSON.stringify(userName));
      }
    };

    return (
      <>
        <div className="w-[450px] px-8 py-5 h-[430px] m-auto mt-5 bg-[#2E4272]  rounded-[80px]">
          <input
            onChange={onUserName}
            className="w-[165px] p-1 rounded-lg outline-none m-auto block bg-[#25375e00] text-[#ffffff92] placeholder:text-[#ffffff92]"
            type="text"
            aria-label="Enter name"
            placeholder="Enter name..."
            maxLength={20}
          />
          <h1 className="text-center text-white m-0 text-lg">
            {this.state.name} Tasbeehi
          </h1>
          <div className="py-8 rounded-xl mt-8 bg-white">
            <span className="text-center block text-3xl font-semibold">
              {this.state.count}
            </span>
          </div>
          <div className="mt-10 flex items-start justify-between">
            <button
              onClick={Remove}
              className="p-4 text-md bg-red-500 text-white rounded-lg hover:bg-red-600 delay-100 transition-all active:bg-red-500"
            >
              remove
            </button>

            <button
              onClick={Add}
              className="p-16 bg-[#061539] text-white rounded-full active:bg-[#061539dd]"
            >
              add
            </button>

            <button
              onClick={Reset}
              className="p-4 px-6 text-md bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all active:bg-green-600"
            >
              reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Table;
