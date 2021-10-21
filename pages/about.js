import Head from "next/head";
import Link from 'next/link';

export default function About({posts}) {
  return (
    <div>
      <Head>
        <title>Retroshark - About</title>
      </Head>
      About
      {posts && posts.map((post) => (
        <Link href={"/posts/" + post.Slug}>
          <div key={post.id}>
            
            {(post.Image ?
              (<img
                src={"http://localhost:1337" + `${post.Image.url}`}
                alt="Segun Adebayo"
              />)
              : (<h4>No img atm</h4>)
            )}
            <h2>{post.Title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts }
  }
}