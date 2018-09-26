import React from "react";
import ContactBar from "./contact-bar";
import AboutMe from "./about-me";
import Technologies from "./Technologies";

export default function LandingPage(props) {
  return (
    <main>
      <ContactBar />
      <AboutMe />
      <Technologies />
    </main>
  );
}
