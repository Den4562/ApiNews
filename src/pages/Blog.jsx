import React from "react";
import { useAPP } from "../utils/context";

const Blog = () => {
  const { message } = useAPP();

  return (
    <div>
      Blog
      <h1>{message}</h1>
    </div>
  );
};

export default Blog;
