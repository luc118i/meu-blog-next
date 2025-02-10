"use client";

import React from "react";
import { PostListContainer } from "./styled";
import PostItem from "../PostItem/PostItem";

interface Post {
  id: string;
  name: string;
  description: string;
  body: string;
  created_at: string; // Data de criação da postagem
  autor: string; // Autor da postagem
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
          createdAt={post.created_at}
          author={post.autor}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
