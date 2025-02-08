"use client";

import React from "react";
import { PostListContainer } from "./styled";
import PostItem from "../PostItem/PostItem";

interface Post {
  id: string;
  name: string;
  description: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          name={post.name}
          description={post.description}
          body={post.body}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
