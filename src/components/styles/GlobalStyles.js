import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open-sans", sans-serif;
  }
  
  nav {
    margin-top: 37px;
    margin-right: 142px;
    margin-bottom: 190px;
  }
  
  .nav-btns-container {
    margin-bottom: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
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
`