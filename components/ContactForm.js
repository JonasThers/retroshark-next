import { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        event.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormMessage("Message sent, thank you for your interest");
        },
        (error) => {
          console.log(error.text);
          setFormMessage("Something went wrong, try again");
        }
      );
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <input type="hidden" name="contact_number" />
        <div className="contact-form__input">
          <input
            id="standard-basic"
            label="Name*"
            placeholder="Your name"
            name="name"
            {...register("nameRequired", { required: true })}
          />
          {errors.nameRequired && <span className="error">Aint got a name?</span>}
        </div>
        <div className="contact-form__input">
          <input
            id="standard-basic"
            label="E-mail*"
            placeholder="Your email"
            name="email"
            {...register("emailRequired", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          />
          {errors.emailRequired && <span className="error">Aint got a valid email?</span>}
        </div>
        <div className="contact-form__textarea">
          <textarea
            id="standard-basic"
            label="Message*"
            name="message"
            placeholder="Your message"
            rows="9"
            {...register("messageRequired", { required: true })}
          />
          {errors.messageRequired && <span className="error">Nothing on your mind?</span>}
        </div>
        <div className="contact-form__actions">
        <button type="submit" className="btn accept contact-button">Send</button>
        </div>
      </form>
      <div>{formMessage}</div>
    </div>
  );
}
