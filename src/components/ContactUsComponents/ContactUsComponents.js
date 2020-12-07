import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com";
import "../input.css";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
    .add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      setLoader(false);
      // alert("Your message has been submitted ");
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });


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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Feel free to Send us a Message</h3>
        <div className="input-group">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            required
          />
          <label for="name">Name</label>
        </div>

        <div className="input-group">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            required
          />
          <label for="email">Email</label>
        </div>

        <div className="input-group">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
