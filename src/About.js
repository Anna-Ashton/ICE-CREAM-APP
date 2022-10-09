import React from "react";

function About() {
  const aboutUs =
    "We are a one stop shop for ice-cream. Come get icy this summer!";
    const feed='Yummy and Creamy!'
  return (
    <div>
      <h1 className="about">{aboutUs}</h1>
      <h2>{feed}</h2>
      <p>{pic}</p>
    </div>
  );
}

export default About;
