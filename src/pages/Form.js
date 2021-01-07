import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
init("user_wDDr0OQVCk88Xw4XU1Q4O");

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // EmailJS function for sending email with the FORM.
  const sendMessage = (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: "dannebb.10@gmail.com",
      feedback: message,
    };

    emailjs.send("service_upq4gtj", "template_ybrb1lo", templateParams).then(
      function (response) {
        toast.success("Your message was sent!", {
          position: toast.POSITION.TOP_CENTER,
          className: "black-background",
          bodyClassName: "grow-font-size",
          progressClassName: "fancy-progress-bar",
        });
        console.log("SUCCESS!", response.status, response.text);
      },
      function (err) {
        toast.error("Your message was not able to be sent", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("ERROR!", err.status, err.text);
      }
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form-header" onSubmit={sendMessage} method="POST">
      <div className="form-group">
        <label className="form-label-name">Name</label>
        <input
          className="form-message"
          type="text"
          placeholder="Enter name please"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>

      <div className="form-group">
        <label className="form-label-name">Email adress</label>
        <input
          className="form-message"
          type="email"
          placeholder="Enter email please"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </div>

      <div className="form-group">
        <label className="form-label-name">Message</label>
        <textarea
          className="form-message form-textarea"
          rows="3"
          placeholder="Enter message please"
          required
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button type="submit" className="btnn" onClick={sendMessage}>
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
