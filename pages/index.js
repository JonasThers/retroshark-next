import Head from "next/head";
import Hero from "../components/Hero";
import TextBlock from "../components/TextBlock";
import dreamcast from "../public/dreamcast.jpg";
import snes from "../public/snes.jpg";
import turbografx from "../public/turbografx.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Retroshark</title>
      </Head>
      <Hero />
      <div className="content">
        <TextBlock
          img={dreamcast.src}
          content="Just bought a new Dreamcast, but you dont know what great games to get for it?"
        />
        <TextBlock
          img={turbografx.src}
          content="Want to buy a Turbografx-16, but afraid to get ripped off by people selling it for overprice?"
        />
        <TextBlock
          img={snes.src}
          content="Want to sell your old Super Nintendo, but dont know how much you can allow to charge for it?"
        />
        <p className="content__text">
          I'll make sure that you're all good to go to enjoy all the great
          classics out there!
        </p>
        <p className="content__text">
          So in case you're tired of Bowser ruining your retro gaming
          experience, <b /><br />then...
        </p>
        <div className="content__button">
          <Link href="/contact">
            <button className="btn accept">Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
