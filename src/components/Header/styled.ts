import styled from "styled-components";

// Container do header com fundo transparente
export const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.6); /* Transparente com um fundo escuro */
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px); /* Efeito de desfoque no fundo */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Menu de navegação
export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1da1f2; /* Cor semelhante ao azul do Twitter */
  }
`;

// Ícone de perfil
export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
