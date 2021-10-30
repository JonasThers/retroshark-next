import { useContext } from "react";
import { PopupContext } from "./context/popupcontext";
import Navigation from "./Navigation";
import Link from "next/link";

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
    <footer className="footer-content">
      <div className="footer-content__logo">
        <h3>Retroshark</h3>
        <h4>- Retro Gaming Consultancy</h4>
      </div>
      <div className="footer-content__links">
        <Navigation />
      </div>
      <div className="footer-content__newsletter">
        <div className="footer-content__newsletter--title">
          Interested in our newsletter?
        </div>
        <button onClick={openPopup} className="btn accept">
          Newsletter
        </button>
      </div>
      <div className="footer-content__rights">All Rights Saved {year}</div>
    </footer>
  );
}
