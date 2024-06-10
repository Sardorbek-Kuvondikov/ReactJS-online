import React from "react";
import "./fruits.css";

class Fruit extends React.Component {
  render() {
    let { data } = this?.props;
    console.log(data);
    return (
      <>
        <div className="fruit__inner">
          <h1 className="fruit__title">Fruit</h1>
          <ul className="fruit__text">
            {data?.map((fruit) => (
              <li className="fruit__items" key={fruit.name}>
                <img className="fruits__img" src={fruit.img} alt={fruit.name} />
                <h3 className="fruit__name">{fruit.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Fruit;
