import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { PopupContext } from "./context/popupcontext";

export default function Popup() {
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 2500);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setSignUp(true);
    setTimeout(() => {
      setPopup(false);
    }, 2500);
  };

  const [{ popup, setPopup }, { popupContent, setPopupContent }] =
    useContext(PopupContext);

  const openForm = () => {
    
  }

  const closePopup = () => {
    setPopup(false);
    setPopupContent(false);
  };

  return (
    <div className={"popup " + (popup ? "visible" : "hide")}>
      <div className="popup__title">Interested in our newsletter?</div>
      <div className={"popup__form " + (popupContent ? "visible" : "hide")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            placeholder="Your email"
            {...register("email", {
              required: "We kind of need your email for this",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "This seems like an invalid email",
              },
            })}
          />
          {errors.email && <span className="error">We kinda need a valid email for this</span>}
          {signUp && (
            <div className="success">Sit back, relax and look forward to amazing newsletters!</div>
          )}

          <button type="submit" className="btn accept">Sign me up</button>
        </form>
      </div>
      <div className="popup__actions">
        <button className="btn accept" onClick={() => setPopupContent(true)}>
          Yes please!
        </button>
        <button className="btn decline" onClick={closePopup}>
          No thanks!
        </button>
      </div>
    </div>
  );
}
