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
            posts.map((post, index) => (
              <Link href={"/posts/" + post.Slug} key={index}>
                <div className="post-list__post">
                  {post.Image ? (
                    <img
                      className="post-list__post--image"
                      src={"https://calm-ocean-22227.herokuapp.com" + `${post.Image.url}`}
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
  const res = await fetch(process.env.API + "/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
