import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Retroshark - Contact</title>
      </Head>
      <div className="content">
        <div className="content__title">Contact</div>
        <ContactForm />
      </div>
    </div>
  );
}
