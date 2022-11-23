import Image from "next/image";
import React from "react";
import "../styles/intro/intro.css";
function Intro() {
  return (
    <section className="intro">
      <div className="line"></div>
      <h2 className="title">
        Build & manage distributed teams like no one else.
      </h2>
      <Image
        src="/assets/bg-pattern-home-3.svg"
        height={200}
        width={150}
        alt="bg Pattern"
      />
    </section>
  );
}

export default Intro;
