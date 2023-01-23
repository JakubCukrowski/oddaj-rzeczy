import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Open-sans", sans-serif;
    color: #3c3c3c;
  }
  
  nav {
    margin-top: 37px;
    margin-right: 100px;
    margin-bottom: 190px;
  }
  
  .nav-btns-container {
    margin-bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    font-size: 14px;
    color: #737373;

    a {
      padding: 9px 10px;
      border: 0.75px solid transparent;
      display: inline-block;

      &:hover {
        border: 0.75px solid #3c3c3c;
      }
    }
  }
  
  #three-columns {
    text-align: center;
    
    button {
      margin-top: 35px;
      margin-bottom: 80px;
      border: 1px solid #3C3c3c;
      padding: 13px;
      width: 310px;
      font-size: 36px;
    }
  }
  
  .active {
    border: 0.75px solid #3c3c3c;
  }
  
  .deactive {
    border: 0.75px solid transparent;
  }

  ::placeholder {
    color: #3C3C3C26;
  }
  
  .hidden {
    display: none;
  }
  
  .success-message {
    color: forestgreen;
    display: block;
    text-align: center;
    padding-bottom: 30px;
  }
  
  .error {
    color: tomato;
    font-size: 12px !important;
    display: block;
  }
  
  .input-error {
    border-bottom: 2px solid tomato !important;
  }
  
  .error-text {
    color: tomato;
    padding-bottom: 8px;
    font-size: 14px;
  }
  
  

`