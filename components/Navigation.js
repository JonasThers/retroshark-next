import Link from "next/link";

export default function Navigation() {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.url}>
            {link.title}
          </Link>
        );
      })}
    </>
  );
}
