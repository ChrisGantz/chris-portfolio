import React from 'react';

export default function Footer() {
  return (
    <section className="contact-me">
      <p className="thanks">Thank you for taking the time to look at my portfolio</p>

      <p className="open-oppor">I am open to new opportunities and enjoy working and moving my career forwards.</p>

      <p>Contact me:</p>
      <br/>
      <section className="contact-me-bottom">
        <a href="mailto:chris.gonzalez836@gmail.com">
          <i className="fa fa-envelope-o fontSize" />
        </a>
        <a
          href="https://www.linkedin.com/in/chris-gonzalez-70a54416a/"
          target="_blank"
        >
          <i className="fa fa-linkedin-square fontSize" />
        </a>
      </section>
    </section>
  )
}