import styled from "styled-components";

export const PostItemContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255); /* Fundo mais suave */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-transform: capitalize;
  color: #333;
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
`;

export const PostBody = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;

  blockquote {
    font-style: italic;
    color: #444;
    border-left: 4px solid #007bff; /* Borda com uma cor mais vibrante */
    padding-left: 15px;
    margin: 0;
    position: relative;

    &::before {
      content: "“"; /* Aspas estilizada */
      font-size: 2rem;
      position: absolute;
      left: -20px;
      top: -10px;
      color: #007bff;
    }
  }
`;

export const PostInfo = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;

  span {
    display: block;
  }
`;

export const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #007bff;
  padding: 10px 15px;
  border: 2px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
