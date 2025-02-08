import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgb(115, 115, 115);
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0; // Coloca o header no topo
  left: 0; // Alinha o header à esquerda
  width: 100%; // Faz o header ocupar toda a largura da tela
  z-index: 1000; // Garante que o header fique sobre outros elementos
`;
