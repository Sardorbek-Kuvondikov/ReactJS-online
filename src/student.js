import React, { Component } from "react";
import Students from "./students";

class Student extends Component {
  render() {
    const fruits = [
      {
        id: 1,
        name: "olma",
        img: "https://static.vecteezy.com/system/resources/previews/016/940/260/non_2x/apple-fruit-isolated-on-white-background-photo.jpg",
      },
      {
        id: 2,
        name: "olcha",
        img: "https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=",
      },
      {
        id: 3,
        name: "apelsin",
        img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
      },
      {
        id: 4,
        name: "shaftoli",
        img: "https://media.istockphoto.com/id/1137630158/photo/single-peach-fruit-with-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=V8OmiANLcA-hGHcyK6QkXRhXvpnUiAcXo6uKnbwTtQ8=",
      },
      {
        id: 5,
        name: "lemon",
        img: "https://c8.alamy.com/comp/EYKM50/lemon-leaves-single-fruit-drop-of-water-colour-ground-stilllife-EYKM50.jpg",
      },
      {
        id: 6,
        name: "olma",
        img: "https://static.vecteezy.com/system/resources/previews/016/940/260/non_2x/apple-fruit-isolated-on-white-background-photo.jpg",
      },
      {
        id: 7,
        name: "olcha",
        img: "https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=",
      },
      {
        id: 8,
        name: "apelsin",
        img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
      },
      {
        id: 9,
        name: "shaftoli",
        img: "https://media.istockphoto.com/id/1137630158/photo/single-peach-fruit-with-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=V8OmiANLcA-hGHcyK6QkXRhXvpnUiAcXo6uKnbwTtQ8=",
      },
      {
        id: 10,
        name: "lemon",
        img: "https://c8.alamy.com/comp/EYKM50/lemon-leaves-single-fruit-drop-of-water-colour-ground-stilllife-EYKM50.jpg",
      },

      {
        id: 11,
        name: "olma",
        img: "https://static.vecteezy.com/system/resources/previews/016/940/260/non_2x/apple-fruit-isolated-on-white-background-photo.jpg",
      },
      {
        id: 12,
        name: "olcha",
        img: "https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=",
      },
      {
        id: 13,
        name: "apelsin",
        img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=",
      },
      {
        id: 14,
        name: "shaftoli",
        img: "https://media.istockphoto.com/id/1137630158/photo/single-peach-fruit-with-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=V8OmiANLcA-hGHcyK6QkXRhXvpnUiAcXo6uKnbwTtQ8=",
      },
      {
        id: 15,
        name: "lemon",
        img: "https://c8.alamy.com/comp/EYKM50/lemon-leaves-single-fruit-drop-of-water-colour-ground-stilllife-EYKM50.jpg",
      },
    ];
    return (
      <>
        <Students data={{ fruits }} />
      </>
    );
  }
}

export default Student;
