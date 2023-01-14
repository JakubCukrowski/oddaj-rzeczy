import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  color: #3C3C3C;
  font-size: 18px;
  align-items: center;
  
  li {
    padding: 9px 20px;
    border: 0.75px solid transparent;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
      border: 0.75px solid #3c3c3c;
    }
    
    button {
      display: block;
    }
  }
`