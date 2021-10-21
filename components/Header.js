import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <h1>Retroshark</h1>
      </Link>
      <h3>
        Good ol' <br /> retrogaming
      </h3>
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
  );
}
