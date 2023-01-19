import styled from "styled-components";
import yellowBg from '../../../assets/3-Columns-Background.png'

export const InfoContainer = styled.section`
  background-image: url(${yellowBg});
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: space-around;
  
  div {
    width: 334px;
    padding-top: 46px;
    padding-bottom: 86px;
    
    h2 {
      font-size: 90px;
      margin-bottom: 10px;
    }
    
    p {
      margin-bottom: 28px;
    }
  }
`