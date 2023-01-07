import styled from "styled-components";
import heroImg from '../../assets/Hero-Image.png'

export const HeroContainer = styled.div`
  background: transparent url(${heroImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: -65%;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`