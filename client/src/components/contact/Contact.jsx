import React from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/facebook.png";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import BackToTopButton from "../backToTopButton/BackToTopButton";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //handles the form data validation
  const schema = yup.object().shape({
    user_name: yup.string().required("Your Name is required"),
    user_subject: yup.string().required("Subject is required"),
    user_email: yup.string().email().required("Email is required"),
    messages: yup.string().required("Message is required"),
  });

  // register is a part of useForm hook that handles the input value validation
  // handleSubmit is a part of useForm hook that receive the form data if form validation is successful
  //  formstate is a part of react hook form / useForm,
  //  which is the state of the form and grab only the errors of the yup that will display using p tag
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //using the hookform/resolver package,
    // it will tell the react hook form that the data should be in schema yup format
    resolver: yupResolver(schema),
  });

  //handles the form data from emailjs
  const Submit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_qtspq89",
        "template_hmit5k8",
        formRef.current,
        "NhM_X2yblZ-S3LEAM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"> </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +63 09092540911
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              mel.espiloy1@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Github} alt="" className="c-icon" />{" "}
              https://github.com/Mambamel-dev
            </div>
            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />{" "}
              https://www.linkedin.com/in/mel-espiloy-09b4ba23b/
            </div>
            <div className="c-info-item">
              <img src={Facebook} alt="" className="c-icon" />
              https://www.facebook.com/mel.espiloy
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Please do not hesitate to contact me.</b>Whether you have a
            question or just want to say hi, I’ll try my best to get back to
            you!
          </p>

          {/* pass the formref from useRef hook thats handle the emailjs*/}
          {/* pass the handleSubmit method of useform to handle all the inputs before \
          executing OnSubmit method that handles the email js     */}
          <form ref={formRef} onSubmit={handleSubmit(Submit)}>
            <input
              style={{
                // backgroundColor: darkMode && "#f56942",
                // color: darkMode && "white",
                border: darkMode && "none",
              }}
              type="text"
              placeholder="Name"
              {...register("user_name")}
            />
            {/* check if the user_name has an error then fire the message */}
            <p className="errortext">{errors.user_name?.message}</p>

            <input
              style={{
                border: darkMode && "none ",
              }}
              type="text"
              placeholder="Subject"
              {...register("user_subject")}
            />
            {/* check if the user_subject has an error then fire the message */}
            <p className="errortext">{errors.user_subject?.message}</p>

            <input
              style={{
                border: darkMode && "none ",
              }}
              type="text"
              placeholder="Email"
              {...register("user_email")}
            />
            {/* check if the user_email has an error then fire the message */}
            <p className="errortext">{errors.user_email?.message}</p>

            <textarea
              style={{
                border: darkMode && "none ",
              }}
              rows="5"
              placeholder="Message"
              {...register("messages")}
            ></textarea>
            {/* check if the messages has an error then fire the message */}
            <p className="errortext">{errors.messages?.message}</p>

            <button>Submit</button>

            {/* if the submit button is true and doesn't have errors display the message */}
            {done && "Your response has been successfully submitted, Thankyou."}
          </form>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Contact;
