"use client";

import React from "react";
import {
  PostItemContainer,
  PostTitle,
  PostDescription,
  PostBody,
  PostInfo,
  ReadMoreButton,
} from "./styled";

interface PostItemProps {
  name: string;
  description: string;
  body: string;
  createdAt: string; // Data de criação da postagem
  author: string; // Autor da postagem
}

const PostItem: React.FC<PostItemProps> = ({
  name,
  description,
  body,
  createdAt,
  author,
}) => {
  // Formatação da data para uma forma legível
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <PostItemContainer>
      <PostTitle>{name}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <PostBody>
        <blockquote>{body.slice(0, 200)}...</blockquote>
      </PostBody>
      <PostInfo>
        <span>{`Autor: ${author}`}</span>
        <span>{`Publicado em: ${formattedDate}`}</span>
      </PostInfo>
      <ReadMoreButton
        onClick={() =>
          (window.location.href = `/post/${name
            .replace(/\s+/g, "-")
            .toLowerCase()}`)
        }
      >
        Ler mais
      </ReadMoreButton>
    </PostItemContainer>
  );
};

export default PostItem;
