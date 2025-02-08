"use client";

import React from "react";
import {
  PostItemContainer,
  PostTitle,
  PostDescription,
  PostBody,
} from "./styled";

interface PostItemProps {
  name: string;
  description: string;
  body: string;
}

const PostItem: React.FC<PostItemProps> = ({ name, description, body }) => {
  return (
    <PostItemContainer>
      <PostTitle>{name}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <PostBody>{body}</PostBody>
    </PostItemContainer>
  );
};

export default PostItem;
