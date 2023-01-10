import styled from "styled-components";
import peopleImg from '../../assets/People.png'

export const About = styled.section`
  display: flex;
  
  div {
    width: 50%;
    background-color: #F0F1F1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h2 {
      padding-top: 186px;
      padding-bottom: 26px;
      font-size: 38px;
    }
    
    img {
      margin-bottom: 55px;
    }
    
    p {
      margin: 0 150px 40px;
      font-size: 30px;
    }
    
    div {
      align-self: flex-end;
    }
  }
  
  .people-img {
    background: transparent url(${peopleImg});
    background-size: cover;
    background-repeat: no-repeat;
  }
`