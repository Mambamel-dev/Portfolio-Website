import React from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
// import isEmpty from "validator/lib/isEmpty";
// import isEmail from "validator/lib/isEmail";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  // const [message, setMessage] = useState("");

  const schema = yup.object().shape({
    user_name: yup.string().required("Your Name is Required"),
    user_subject: yup.string().required(),
    user_email: yup.string().email().required(),
    messages: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const OnSubmit = (data) => {
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
  // const [formdata, setFormdata] = useState({
  //   user_email: "",
  //   user_name: "",
  //   user_subject: "",
  //   user_message: "",
  // });
  // const { user_email, user_name, user_subject, user_message } = formdata;

  // const handleChange = (e) => {
  //   setFormdata({
  //     ...formdata,
  //     [e.target.name]: e.target.value,

  //     message: "",
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isEmail()) {
  //     setFormdata({
  //       ...formdata,
  //       message: "All fields are required",
  //     });
  //   }
  // emailjs
  //   .sendForm(
  //     "service_qtspq89",
  //     "template_hmit5k8",
  //     formRef.current,
  //     "NhM_X2yblZ-S3LEAM"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //       setDone(true);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  // };
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
          {/* <form ref={formRef} onSubmit={handleSubmit}> */}
          <form ref={formRef} onSubmit={handleSubmit(OnSubmit)}>
            <input
              type="text"
              placeholder="Name"
              // name="user_name"
              // value={user_name}
              // onChange={handleChange}
              {...register("user_name")}
            />
            <p className="errortext">{errors.user_name?.message}</p>
            <input
              type="text"
              placeholder="Subject"
              // name="user_subject"
              {...register("user_subject")}
            />
            <p className="errortext">{errors.user_subject?.message}</p>

            <input
              type="text"
              placeholder="Email"
              // name="user_email"
              // value={user_email}
              {...register("user_email")}
            />
            <p className="errortext">{errors.user_email?.message}</p>

            <textarea
              rows="5"
              placeholder="Message"
              // name="message"
              // value={message}
              {...register("messages")}
            ></textarea>
            <p className="errortext">{errors.messages?.message}</p>

            <button>Submit</button>
            {/* {message && setMessage(message)} */}
            {done && "Your response has been successfully submitted, Thankyou."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
