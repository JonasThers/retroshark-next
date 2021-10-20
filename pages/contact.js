import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Retroshark - Contact</title>
      </Head>
      Contact
      <ContactForm />
    </div>
  );
}
