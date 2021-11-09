import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function PostActions(props) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(async () => {
    const result = await axios("https://calm-ocean-22227.herokuapp.com/posts");

    setPosts(result.data);
  }, [props.slug]);

  useEffect(() => {
    const index = posts.findIndex((post) => post.Slug == props.slug);

    if (posts.length != 0) {
      setCurrentPage(index);
    }
  }, [posts]);

  return (
    <div className="post-actions">
      {posts[currentPage - 1] && (
        <div className="post-actions__prev">
          <Link href={posts[currentPage - 1].Slug}>
            <button className="btn accept">Previous</button>
          </Link>
        </div>
      )}
      {posts[currentPage + 1] && (
        <div className="post-actions__next">
          <Link href={posts[currentPage + 1].Slug}>
            <button className="btn accept">Next</button>
          </Link>
        </div>
      )}
    </div>
  );
}
