import Image from "next/image";
import React from "react";

interface props {
  pic: "string";
  title: "string";
  text: "string";
}

function Card(props: props) {
  const { pic, title, text } = props;
  return (
    <div className="wrapper">
      <Image src={pic} width={60} height={60} alt="img" />
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
}

export default Card;
