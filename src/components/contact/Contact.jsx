import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikihg8b",
        "template_mrt3equ",
        e.target,
        "UUM56N55xMz2v_q9w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 4000);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(handleSubmit, sendEmail)}>
          <input type="text" placeholder="Fullname" name="fullname" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea placeholder="Message" name="message"></textarea>
          <input type="submit" value="Send" className="button" />
          {result ? (
            <span>
              Your message has been sent successfully, I'll reply as soon as
              possible. Thanks 😄
            </span>
          ) : null}
        </form>
      </div>
    </div>
  );
}
