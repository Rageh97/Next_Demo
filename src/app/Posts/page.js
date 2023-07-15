import Link from "next/link";
import React from "react";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <h1>posts</h1>
      <div>
        {posts.map((post, index) => {
          return (
            <Link href={`./Posts/${post.id}`}>
              <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
