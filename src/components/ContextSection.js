import { styled } from "styled-components";

export const ContextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 64px;
  @media (min-width: 1440px) {
    flex-basis: 550px;
  }
`

export const TextContent = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
  @media (min-width: 768px) {
    text-align: unset;
  }
`

export const TitleHeading = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.291667px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.520833px;
    text-align: unset;
  }
`;