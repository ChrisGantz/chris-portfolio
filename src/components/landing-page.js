import React from "react";
import ContactBar from "./contact-bar";
import AboutMe from "./about-me";
import Technologies from "./Technologies";
import Projects from "./projects";

export default function LandingPage(props) {
  return (
    <main>
      <ContactBar />
      <Projects />
      <AboutMe />
      <Technologies />
    </main>
  );
}
