"use client";
import React from "react";
import { HeaderContainer, Nav, NavItem, NavLink, ProfileIcon } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <NavLink href="#">Meu perfil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Seguindo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Assuntos</NavLink>
        </NavItem>
      </Nav>
      <ProfileIcon>
        <img
          src="https://static.vecteezy.com/ti/vetor-gratis/t1/18765757-icone-de-perfil-de-usuario-em-estilo-simples-ilustracao-em-avatar-membro-no-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana-vetor.jpg"
          alt="Profile"
        />
      </ProfileIcon>
    </HeaderContainer>
  );
};

export default Header;
