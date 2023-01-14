import styled from "styled-components";
import bgImg from '../../assets/Background-Image.png'

export const Contact = styled.section`
  background: transparent url(${bgImg}) no-repeat;
  background-size: cover;
  background-attachment: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .form-container {
    padding-top: 200px;
    padding-right: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }
  
  h2 {
    padding-bottom: 25px;
  }
  
  img {
    padding-bottom: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    
    div {
      display: flex;
      gap: 16px;
      
      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
  
  input[type="submit"] {
    align-self: flex-end;
    margin-bottom: 200px;
    margin-top: 40px;
    border: 0.75px solid #3c3c3c;
    padding: 13px 52px;
  }
  
  input:not(input[type="submit"]),
  textarea {
    border: none;
    border-bottom: 0.75px solid #3c3c3c;
    background-color: transparent;
  }
  
  .textarea-container {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    
    textarea {
      overflow: auto;
      height: 100px;
    }
  }
  
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 142px;
    width: 100%;
    position: relative;
    z-index: 15;
    margin-bottom: 20px;
    
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .footer-images {
      display: flex;
      gap: 20px;
      
      img {
        padding-bottom: 0;
      }
    }
  }
`