import styled from "styled-components";

export const PostItemContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const PostDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  font-style: italic;
  margin-bottom: 15px;
`;

export const PostBody = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
`;
