export default function Post({ post }) {
  
    return (
      <div>
        <h3
        >
          {post.Title}
        </h3>
        {(post.Image ?
          (<img
            src={"http://localhost:1337" + `${post.Image.url}`}
            alt="Segun Adebayo"
          />)
          : (<h4>No img atmn</h4>)
        )}
        <p>{post.Content}</p>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/posts");
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
  
    const res = await fetch("http://localhost:1337" + `/posts?Slug=${slug}`);
    const data = await res.json();
    const post = data[0];
  
    return {
      props: { post },
    };
  }