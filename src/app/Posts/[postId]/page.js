import React from "react";

const page = async ({ params }) => {
  const postId = params.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <h4>{post.body}</h4>
    </div>
  );
};

export default page;
