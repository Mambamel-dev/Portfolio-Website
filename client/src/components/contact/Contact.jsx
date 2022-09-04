import React from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"> </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              mel.espiloy1@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Naga City
              Camarines Sur Philippines
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What is yor story?</b>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias.
          </p>
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
