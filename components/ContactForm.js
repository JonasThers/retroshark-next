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
      <form onSubmit={handleSubmit(sendEmail)}>
        <input type="hidden" name="contact_number" />
        <input
          id="standard-basic"
          label="Name*"
          name="name"
          {...register("nameRequired", { required: true })}
        />
        {errors.nameRequired && <span>This field is required</span>}
        <input
          id="standard-basic"
          label="E-mail*"
          name="email"
          {...register("emailRequired", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
          })}
        />
        {errors.emailRequired && <span>Valid email is required</span>}
        <input
          id="standard-basic"
          label="Phone*"
          name="phone"
          {...register("phoneRequired", { required: true })}
        />
        {errors.phoneRequired && <span>Valid phone number is required</span>}
        <button type="submit">Send</button>
      </form>
      <div>{formMessage}</div>
    </div>
  );
}
