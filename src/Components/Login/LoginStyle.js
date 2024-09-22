import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: "Arial", sans-serif;
`;

export const SidebarLeft = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const MainContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 31px;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #e7e9ea;
`;

export const LoginButton = styled.button`
  width: 300px;
  padding: 0.75rem 1rem;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a91da;
  }
`;

export const UserData = styled.div`
  background-color: #192734;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 2rem;
  width: 300px;
  font-size: 14px;
  line-height: 1.5;
  color: #e7e9ea;
`;

export const Pre = styled.pre`
  white-space: pre-wrap;
  word-break: break-word;
`;

export const Form = styled.div`
  margin-top: 2rem;
`;
export const Input = styled.div`
  margin-top: 2rem;
`;
