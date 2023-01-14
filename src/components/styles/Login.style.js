import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  form {
    background-color: #F0F1F1;
    padding: 40px 67px;
    margin-bottom: 40px;
    
    input[type="email"] {
      margin-bottom: 30px;
    }
    
    input {
      background-color: transparent;
      border: none;
      border-bottom: 0.75px solid #3c3c3c;
      margin-top: 30px;
    }
  }
  
  .buttons {
    width: 120%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button {
      padding: 13px 16px;
      border: 0.75px solid transparent;
      
      &:hover {
        border: 0.75px solid #3c3c3c;
      }
    }
  }
`