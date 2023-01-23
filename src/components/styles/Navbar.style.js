import styled from "styled-components";

export const NavbarStyle = styled.section`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  h2 {
    margin-bottom: 25px;
    text-align: center;
  }
  
  img {
    margin-bottom: 60px;
  }
  
  .home-btn {
    padding: 13px 18px;
    border: 0.75px solid #3c3c3c;
  }
  
  nav {
    align-self: flex-end;
    margin-bottom: 100px;
  }
`