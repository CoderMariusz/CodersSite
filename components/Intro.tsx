import Image from "next/image";
import React, { lazy } from "react";
import "../styles/intro/intro.css";
const Card = lazy(() => import("./Card"));
function Intro() {
  return (
    <>
      <section className="intro">
        <section className="top">
          <div className="line"></div>
          <h2 className="title">
            Build & manage distributed teams like no one else.
          </h2>
          <Image
            className="intro-top-img"
            src="/assets/bg-pattern-home-3.svg"
            height={200}
            width={150}
            alt="bg Pattern"
          />
        </section>
        <section className="cards">
          <Card
            pic="/assets/icon-man.svg"
            title="Experienced Individuals"
            text="Our network is made up of highly experienced professionals who are passionate about what they do."
          />
          <Card
            pic="/assets/icon-cog.svg"
            title="Easy to Implement"
            text="Our processes have been refined over years of implementation meaning our teams always deliver."
          />
          <Card
            pic="/assets/icon-chart.svg"
            title="Enhanced Productivity"
            text="Our customized platform with in-built analytics helps you manage your distributed teams."
          />
        </section>
      </section>
    </>
  );
}

export default Intro;
