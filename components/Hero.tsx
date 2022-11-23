import Image from "next/image";
import "../styles/hero/hero.css";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <h2>
        Find the <span>best talent</span>
      </h2>
      <p>
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
      <Image
        src="/bg-pattern-home-2.svg"
        width={350}
        height={100}
        alt="pattern"
      />
    </section>
  );
}

export default Hero;
