import Head from "next/head";
import Link from "next/link";
import PostActions from "../../components/PostActions";

export default function Post({ post }) {
  console.log("test")
  console.log(process.env.API + `${post.Image.url}`)
  return (
    <div>
      <Head>
        <title>Retroshark - {post.Title}</title>
      </Head>
      <div className="content">
        <div className="content__title">{post.Title}</div>
        {post.Image ? (
          <img
            className="content__image"
            src={"https://calm-ocean-22227.herokuapp.com" + `${post.Image.url}`}
            alt="Segun Adebayo"
          />
        ) : (
          <h4>No img atmn</h4>
        )}
        <p className="content__text">{post.Content}</p>
        <PostActions slug={post.Slug} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API + "/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(process.env.API + `/posts?Slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}
