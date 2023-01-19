import styled from "styled-components";
import heroImg from '../../../assets/Hero-Image.png'

export const HeroContainer = styled.div`
  background: url(${heroImg}) no-repeat;
  background-size: contain;
  background-position: -350px;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  
  .hero-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 44px;
    margin-top: 30px;
    
    li {
      width: 50%;
      border: 0.75px solid #3c3c3c;
      
      a {
        display: block;
        padding: 13px 0;
        font-size: 28px;
        font-weight: lighter;
      }
    }
  }
`