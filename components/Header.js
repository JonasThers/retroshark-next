import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navigation">
        <Link href="/">
          <h1 className="title">Retroshark</h1>
        </Link>
        <nav>
          <Navigation />
        </nav>
      </div>
      <h3 className="sub-title">
        Retro gaming <br /> consultancy
      </h3>
    </header>
  );
}
