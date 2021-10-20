import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import { PopupContext } from "./context/popupcontext";

export default function Layout({ children }) {
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(false);

  return (
    <>
      <Header />
      <PopupContext.Provider
        value={[
          { popup, setPopup },
          { popupContent, setPopupContent },
        ]}
      >
        {children}
        <Footer />
        <Popup />
      </PopupContext.Provider>
    </>
  );
}
