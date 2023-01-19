import styled from "styled-components";

export const Organizations = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
  
  h2 {
    padding-bottom: 25px;
  }
  
  img {
    padding-bottom: 55px;
  }
  
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    
    button {
      padding: 0 42px;
      height: 46px;
      
      &:nth-child(2) {
        margin: 0 80px;
      }
      
      &:hover {
        border: 0.75px solid #3c3c3c;
      }
    }
  }
  
  .desc {
    padding-bottom: 60px;
    width: 640px;
    font-size: 22px;
    text-align: center;
  }
  
  .pagination-btns {
    display: flex;
    gap: 50px;
    margin-bottom: 80px;
    
    button {
      padding: 13px 15px;
      //border: 0.75px solid transparent;
      
      &:hover {
        border: 0.75px solid #3c3c3c;
      }
      
      &:focus {
        border: 0.75px solid #3c3c3c;
      }
    }
  }
`