import Head from "next/head";
import Link from "next/link";

export default function About({ posts }) {
  return (
    <div>
      <Head>
        <title>Retroshark - About</title>
      </Head>
      <div className="content">
        <div className="content__title">About</div>
        <div className="post-list">
          {posts &&
            posts.map((post) => (
              <Link href={"/posts/" + post.Slug}>
                <div className="post-list__post" key={post.id}>
                  {post.Image ? (
                    <img
                      className="post-list__post--image"
                      src={"http://localhost:1337" + `${post.Image.url}`}
                      alt="Segun Adebayo"
                    />
                  ) : (
                    <h4>No img atm</h4>
                  )}
                  <h6 className="post-list__post--title">{post.Title}</h6>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
