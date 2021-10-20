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
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      </nav>
    </div>
  );
}
