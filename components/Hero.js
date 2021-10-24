import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <h2 className="hero__title">
        Get the help you need with good ol' gaming
      </h2>
      <div className="hero__actions">
        <Link href="/about">
          <button className="btn accept">My services</button>
        </Link>
        <Link href="/contact">
          <button className="btn accept">Contact me</button>
        </Link>
      </div>
    </div>
  );
}
