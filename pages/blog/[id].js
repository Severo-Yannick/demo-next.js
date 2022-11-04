import Link from "next/link";

const Post = (post) => {
  const postValues = Object.values(post)
  const {title, body} = postValues[0]
  return (
    <>
      <h1>Post</h1>
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      <Link href="/blog">Back to blog</Link>
      <br />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const posts = await res.json();
  const paths = posts.map((post) => {
    return {params: {id: post.id.toString()}}
  })
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const URL = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const res = await fetch(URL);
  const post = await res.json();

  return { props: { post } };
}
