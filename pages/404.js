import Head from "next/head";

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <div className="content">
        <div className="content__title">404</div>
        <p className="content__text">
          Sorry Mario, but the page is in another castle
        </p>
      </div>
    </div>
  );
}
