import { useContext } from "react";
import { PopupContext } from "./context/popupcontext";

export default function Footer() {
  const [{ popup, setPopup }, { popupContent, setPopupContent }] =
    useContext(PopupContext);

  const openPopup = () => {
    setPopup(true);
    setPopupContent(true);
  };

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div>
      <div>All Rights Saved {year}</div>
      <button onClick={openPopup} className="btn accept">Newsletter</button>
    </div>
  );
}
