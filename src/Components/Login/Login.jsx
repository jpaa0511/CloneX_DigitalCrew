import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../auth/contexts/UserContext";
import {
  GlobalStyle,
  Container,
  SidebarLeft,
  MainContent,
  Title,
  LoginButton,
} from "./LoginStyle";
import XIcon from "@mui/icons-material/X";

export const Login = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    loginUser({
      name: "Usuario de Ejemplo",
      email: "usuario@example.com",
    });
    navigate("/main");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SidebarLeft>
          <XIcon style={{ fontSize: "400px", color: "#e7e9ea" }} />
        </SidebarLeft>
        <MainContent>
          <Title>Inicia sesión en X</Title>
          <LoginButton onClick={onLogin}>Iniciar sesión</LoginButton>
        </MainContent>
      </Container>
    </>
  );
};
