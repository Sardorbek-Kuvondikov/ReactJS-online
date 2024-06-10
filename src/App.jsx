import React from "react";
import Fruit from "./fruits";

class App extends React.Component {
  render() {
    const fruitArr = [
      {
        img: "https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=",
        name: "watermelon",
      },
      {
        img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
        name: "orange",
      },
      {
        img: "https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=",
        name: "charry",
      },
      {
        img: "https://thumbs.dreamstime.com/b/lemon-isolated-24834437.jpg",
        name: "lemon",
      },
    ];
    return (
      <>
        <Fruit data={fruitArr} />
      </>
    );
  }
}

export default App;
