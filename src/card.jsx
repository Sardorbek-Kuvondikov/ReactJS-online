import React, { Component } from "react";
import Mock from "./mock";
import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Mock,
      enter: "",
      name: "",
      title: "",
      img: "",
      active: null,
      editname: "",
    };
  }
  render() {
    const onEntrance = (id) => {
      if (this.state.enter) {
        this.setState({ enter: "" });
      } else {
        this.setState({ enter: id });
      }
    };
    const onAdd = () => {
      document.querySelector(".form").classList.toggle("open");
    };
    const onChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
    };
    const onNewMarket = (evt) => {
      if (!this.state.name || !this.state.title || !this.state.img) {
        alert("Barcha maydonlarni to'ldiring!");
        return;
      }
      evt.preventDefault();
      const newObj = {
        id: this.state.data.length + 1,
        name: this.state.name,
        title: this.state.title,
        img: this.state.img,
      };
      this.setState({
        data: [...this.state.data, newObj],
      });
    };
    const onDelete = (id) => {
      const res = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: res });
    };

    const onEdit = ({ id, name }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((item) =>
          item.id === this.state.active?.id
            ? { ...item, name: this.state.editname }
            : item
        );
        this.setState({ data: res, active: null });
      } else {
        this.setState({ editname: name, active: { id, name } });
      }
    };

    const onEditName = (evt) => {
      this.setState({ editname: evt.target.value });
    };

    const onSearch = (evt) => {
      let regEx = new RegExp(evt.target.value, "gi");
      let res = Mock.filter((item) => item.name.match(regEx));
      this.setState({ data: res });
    };

    return (
      <>
        <div className="container">
          <input
            onChange={onSearch}
            className="searchInput"
            type="search"
            placeholder="search"
          />
          <ul className="items">
            {this.state.data.length ? (
              this.state.data.map(({ id, name, title, img }) => {
                return (
                  <li className="item" key={id}>
                    <img src={img} alt={name} />
                    {this.state.active?.id === id ? (
                      <input
                        onChange={onEditName}
                        name="editname"
                        className="editin"
                        type="text"
                        value={this.state.editname}
                      />
                    ) : (
                      <h3>{name}</h3>
                    )}
                    <p>{title}</p>
                    <button onClick={() => onEntrance(id)} className="btn">
                      {this.state.enter === id && this.state.enter
                        ? "Chiqish"
                        : "Kirish"}
                    </button>
                    <div className="view">
                      <button onClick={() => onDelete(id)} className="delete">
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          onEdit({ id, name }, this.state.active?.id === id)
                        }
                        className="edit"
                      >
                        {this.state.active?.id === id ? "Save" : "Edit"}
                      </button>
                    </div>
                    <p>{this.state.enter === id ? name : ""}</p>
                  </li>
                );
              })
            ) : (
              <h1>N/A</h1>
            )}
            <li>
              <button onClick={onAdd} className="add-btn">
                <span>add</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="container">
          <form className="form">
            <input
              name="img"
              onChange={onChange}
              type="url"
              placeholder="img"
              required
            />
            <input
              name="name"
              onChange={onChange}
              type="text"
              placeholder="name"
              required
            />
            <input
              name="title"
              onChange={onChange}
              type="text"
              placeholder="title"
              required
            />
            <button type="submit" onClick={onNewMarket}>
              Qo'shish
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Card;
