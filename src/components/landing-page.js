import React from "react";
import ContactBar from "./contact-bar";
import AboutMe from "./about-me";
import Projects from "./projects";
import Background from "./background";
import Footer from "./footer";

export default function LandingPage(props) {
  return (
    <div className="app">
      <Background />
      <main className="container">
        <ContactBar />
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
