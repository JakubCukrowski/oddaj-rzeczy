import styled from "styled-components";
import sweater from '../../assets/Header-Form-Background.png'

export const CollectionStyle = styled.section`
  background: transparent url(${sweater});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 250px;
    text-align: center;
    
    h1 {
      font-size: 30px;
      margin-top: -80px;
      margin-bottom: 8px;
    }
    
    span {
      font-size: 30px;
      margin-bottom: 20px;
    }
    
    img {
      margin-bottom: 20px;
    }
  }
  
  .squares {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    gap: 30px;
    font-size: 22px;
    margin-top: 50px;
    
    .square {
      width: 125px;
      height: 125px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border: 0.75px solid #3c3c3c;
        top: 80%;
        left: 0;
        transform: rotate(45deg) translate(-50%, -50%);
        
      }
    }
  }
`