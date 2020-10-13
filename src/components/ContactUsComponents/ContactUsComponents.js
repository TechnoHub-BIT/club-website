import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "gmail",
        "template_safo57w",
        e.target,
        "user_cYxQj4CXBNqFVuIqfsndF"
      )
      .then(
        (result) => {
          // console.log(result.text);
        alert("Your message has been submitted ");
        setLoader(false);
        },
        (error) => {
          // console.log(error.text);
        alert(error.message);
        setLoader(false);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us </h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
