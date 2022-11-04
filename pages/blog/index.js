import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts?.map((post) => {
        return (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <h5>{post.title}</h5>
            </Link>
        );
      })}
    </div>
  );
};

export default Blog;

// SSR - Called at build time on server-side.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";
  const res = await fetch(URL);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { posts } };
}
