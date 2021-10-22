import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navigation">
       <Link href="/">
        <h1 className="title">Retroshark</h1>
      </Link>
      <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/contact">
        Contact
      </Link>
      </nav>
      </div>
      <h3 className="sub-title">
        Retrogaming <br /> consultancy
      </h3>
    </header>
  );
}
