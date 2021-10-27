import Head from "next/head";
import Hero from "../components/Hero";
import TextBlock from "../components/TextBlock";
import dreamcast from "../public/dreamcast.jpg";
import snes from "../public/snes.jpg";
import turbografx from "../public/turbografx.jpg";
import Link from "next/link";

export default function Home() {
  const textBlocks = [
    {
      imgUrl: dreamcast.src,
      text: "Just bought a new Dreamcast, but you dont know what great games to get for it?",
    },
    {
      imgUrl: turbografx.src,
      text: "Want to buy a Turbografx-16, but afraid to get ripped off by people selling it for overprice?",
    },
    {
      imgUrl: snes.src,
      text: "Want to sell your old Super Nintendo, but dont know how much you can allow to charge for it?",
    },
  ];

  return (
    <div>
      <Head>
        <title>Retroshark</title>
      </Head>
      <Hero />
      <div className="content">
        {textBlocks.map((textBlock, index) => {
          return (
            <TextBlock
              key={index}
              img={textBlock.imgUrl}
              content={textBlock.text}
            />
          );
        })}
        <p className="content__text">
          I'll make sure that you're all good to go to enjoy all the great
          classics out there!
        </p>
        <p className="content__text">
          So in case you're tired of Bowser ruining your retro gaming
          experience,
          <br />
          then...
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
