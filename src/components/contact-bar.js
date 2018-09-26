import React from "react";

export default function ContactBar() {
  return (
    <nav>
      <h1>Christopher Gonzalez</h1>
      <div className="contact-info">
        <p>
          Email{" "}
          <a href="mailto:chris.gonzalez836@gmail.com">
            chris.gonzalez836@gmail.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/chris-gonzalez-70a54416a/"
          target="_blank"
        >
          linkedin
        </a>
        <a href="https://github.com/ChrisGantz" target="_blank">
          GitHub
        </a>
        <a href="#">Projects</a>
      </div>
    </nav>
  );
}
