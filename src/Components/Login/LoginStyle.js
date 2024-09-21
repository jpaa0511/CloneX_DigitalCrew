import styled from "styled-components";


export const Div = styled.div`
.container{
    display: flex;
    background: linear-gradient(to right, white 0%, white 50%,#00acee 0%, #00acee 50%); 
    min-height:100vh;
    margin: -10px;
}

.logo{
    width: 300px;
    height: 300px;
    margin-top: 70px;
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1{
    text-align: center;
    color: #00acee;
    font-size: 50px;
    margin-bottom: 20px;
    margin-left: 150px;
}

.login-container {
    width: 100%;
    max-width: 300px;
    margin-top: 100px;
    margin-left: 400px;
    margin-bottom: 100px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
  h2 {
    color: #00acee; 
    font-size: 50px;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    width: 95%;
    padding: 10px;
    background-color: #1da1f2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #1a91da;
  }`;




