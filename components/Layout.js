import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";
import { PopupContext } from "./context/popupcontext";
import Container from '@mui/material/Container';

export default function Layout({ children }) {
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(false);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
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
      </Container>
    </>
  );
}
