import React from "react";
import ContactBar from "./contact-bar";
import AboutMe from "./about-me";
import Technologies from "./Technologies";
import Projects from "./projects";
import Background from "./background";

export default function LandingPage(props) {
  return (
    <div className="app">
      <Background />
      <main className="container">
        <ContactBar />
        <AboutMe />
        <Projects />
        <Technologies />
      </main>
    </div>
  );
}
