import styled from "styled-components";


export const FourSteps = styled.div`
  background-color: #F0F1F1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 170px;
  
  div {
    padding-top: 73px;
    padding-bottom: 75px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      width: 70px;
      height: 2px;
      background-color: black;
      position: absolute;
      bottom: 37%;
    }
    
    &:nth-child(3):after {
      bottom: 35%;
    }
    
    
    h4 {
      padding-top: 10px;
      padding-bottom: 21px;
    }
  }
  
`