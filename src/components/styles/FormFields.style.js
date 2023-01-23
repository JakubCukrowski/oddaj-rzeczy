import styled from "styled-components";
import bear from '../../assets/Background-Form.png'

export const FormFieldsStyle = styled.div`
  background: transparent url(${bear});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  
  .buttons-field {
    position: absolute;
    bottom: 50px;
    left: 142px;
    display: flex;
    gap: 40px;

    button {
      padding: 20px 50px;
      border: 0.75px solid #3c3c3c;
    }
  }
  
  
  .container {
    padding: 0 140px;
    position: relative;
    height: 100%;

    .thank-you-container {
      font-size: 30px;
      text-align: center;
      position: absolute;
      top: 40%;
      left: 30%
      transform: translateX(-40%);

      img {
        margin: 0 auto;
      }
    }

    .summary {
      padding-top: 20px;
      padding-bottom: 30px;
      display: block;
    }
    
    .flex-container {
      display: flex;
      align-items: center;
      gap: 40px;
      
      img {
        width: 40px;
        height: 40px;
      }
    }
    
    .form-two-groups {
      display: flex;
      align-items: flex-start;
      gap: 120px;
      margin-top: 30px;
    }
    
    .dropdown-menu {
      display: flex;
      align-items: center;
      font-size: 24px;
      margin-top: 44px;
      
      p {
        margin-right: 24px;
      }
      
      .bags,
      .locations {
        position: relative;
      }
      
      .dropdown-select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        width: 180px;
        cursor: pointer;
        border: 0.75px solid #3c3c3c;
      }
      
      .city {
        margin-bottom: 20px;
      }
      
      .dropdown-options {
        margin-top: 10px;
        position: absolute;
        background-color: #E8E9E4;
        right: 0;
        display: flex;
        flex-direction: column;
        border: 0.75px solid #3c3c3c;
        
        span:not(:last-child) {
          margin-bottom: 6px;
        }
        
        #optionOne,
        #optionTwo,
        #optionThree,
        #optionFour,
        #optionFive {
          font-size: 24px;
          cursor: pointer;
          padding: 6px 26px;
        }
      }

      .cities {
        width: 100%;
      }
    }
    
    h3 {
      padding-top: 35px;
      padding-bottom: 70px;
      font-size: 20px;
    }
    
    span {
      font-size: 32px;
    }
    
    .inputs-group {
      margin-top: 40px;
      font-size: 24px;
      
      input[type="radio"] {
        -webkit-appearance: none;
        border: 1px solid #3c3c3c;
        width: 20px;
        height: 20px;
        
        &:checked {
          background-color: #FAD648;
        }
      }
      
      input[type="text"] {
        display: block;
        width: 100%;
        margin-top: 10px;
      }
      
      .radio {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 40px;
      }
    }
    
    .pageThree {
      display: inline-block;

      .search-result {
        width: 100%;
        height: 30px;
        border: 0.75px solid #3c3c3c;
        overflow: hidden;
        overflow-y: auto;
        font-size: 16px;

        &::-webkit-scrollbar {
          width: 0;
          height: 0
        }
      }
    }
  }
  
  .category-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 26px;
    max-width: 800px;
    margin-top: 10px;
    
    button {
      border: 0.75px solid #3c3c3c;
      padding: 11px 26px;
      font-size: 20px;
    }
    
    .selected {
      background-color: #FAD648;
    }
  }
  
  .form-summary-container {
    margin-top: 20px;
    
    .form-summary-input-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 25px;
      
      input {
        height: 28px;
      }
      
      textarea {
        height: 80px;
      }
      
      input,
      textarea {
        background-color: transparent;
        border: 0.75px solid #3c3c3c;
        width: 150px;
      }
    }
  }
`

export const TopBar = styled.div`
  background-color: #FAD648;
  
  .container {
    padding: 20px 140px;
    
    h2 {
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
`