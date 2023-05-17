import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import errorImg from './assets/images/icon-error.svg'
import { ContextSection, TitleHeading, TextContent } from './components/ContextSection'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [showError, setShowError] = useState(false)
  const [email, setEmail] = useState('')

  function handleInputValue(e) {
    setInputValue(e.target.value)
    setShowError(false)
  }

  function handleSubmit(event) {

    let isError = false;

    if (inputValue.trim() === "") {
      isError = true;
      setShowError(true);
    }

    if (email.trim() === "" || !validateEmail(email)) {
      isError = true;
      setShowError(true);
    }

    if (isError) {
      event.preventDefault();
      return;
    }
  }

    const validateEmail = (email) => {
      // Regular expression pattern for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }

    return (
      <MainContainer>
        <GlobalStyles />
        <ContextSection>
          <TitleHeading> Learn to code by watching others </TitleHeading>
          <TextContent>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </TextContent>
        </ContextSection>
        <SignUpSection>
          <PlanContainer>
            <PlanText><PlanTextSpan as={'span'}>Try it free 7 days</PlanTextSpan> then $20/mo. thereafter</PlanText>
          </PlanContainer>
          <FormContainer as={'form'} onSubmit={handleSubmit} noValidate>
            <InputDiv>
              <TextInput onChange={handleInputValue} type="text" placeholder="First Name" />
              {showError && inputValue.trim() === "" && (
                <>
                  <ErrorImg src={errorImg} alt="error icon" />
                  <ErrorMsg>First Name cannot be empty</ErrorMsg>
                </>
              )}
            </InputDiv>
            <InputDiv>
              <TextInput onChange={handleInputValue} type="text" placeholder="Last Name" />
              {showError && inputValue.trim() === "" && (
                <>
                  <ErrorImg src={errorImg} alt="error icon" />
                  <ErrorMsg>Last Name cannot be empty</ErrorMsg>
                </>
              )}
            </InputDiv>
            <InputDiv>
              <TextInput value={email} onChange={handleEmail} type="email" placeholder="Email Address" />
              {showError && (email.trim() === "" || !validateEmail(email)) && (
                <>
                  <ErrorImg src={errorImg} alt="error icon" />
                  {email.trim() === "" ? (
                    <ErrorMsg>Email cannot be empty</ErrorMsg>
                  ) : (
                    <ErrorMsg>Looks like this is not a valid email</ErrorMsg>
                  )}
                </>
              )}
            </InputDiv>
            <InputDiv>
              <TextInput onChange={handleInputValue} type="password" placeholder="Password" />
              {showError && inputValue.trim() === "" &&
                (<>
                  <ErrorImg src={errorImg} alt="error icon" />
                  <ErrorMsg>Password cannot be empty</ErrorMsg>
                </>)
              }
            </InputDiv>
            <SubmitBtn type="submit">CLAIM YOUR FREE TRIAL</SubmitBtn>
            <SubText>By clicking the button, you are agreeing to our <SubTextSpan as={'span'}>Terms and Services</SubTextSpan></SubText>
          </FormContainer>
        </SignUpSection>
      </MainContainer>
    );
  }

  export default App;

  const MainContainer = styled.div`
  padding: 88px 24px 68px 24px;
  @media (min-width: 1440px) {
    padding: 121px 165px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
    height: 100vh;
  }
`;

  const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

  const PlanContainer = styled.div`
  padding: 18px 66px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  background-color: #5E54A4;
`;

  const PlanText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  color: #FFF;
  @media (min-width: 1440px) {
    width: max-content;
  }
`;

  const PlanTextSpan = styled(PlanText)`
  font-weight: 700;
`;

  const FormContainer = styled(PlanContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #fff;
  @media (min-width: 1440px) {
    padding: 40px;
  }
`;

  const InputDiv = styled.div`
  position: relative;
`;

  const TextInput = styled.input`
  padding: 15px 0 15px 20px;
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  background: none;
  width: 100%;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.25px;
    color: #3D3B48;
    mix-blend-mode: normal;
    opacity: 0.75;
  }

  &:focus-visible {
    outline-color: #5E54A4;
  }

  &[type='email']:invalid {
    color: red;
  }
`;

  const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  color: #FFFFFF;
  background: #38CC8B;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

  const SubText = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  text-align: center;
  color: #BAB7D4;
`;

  const SubTextSpan = styled(SubText)`
  color: #FF7979;
`;

  const ErrorMsg = styled.p`
  margin-top: 6px;
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #FF7979;
`;

  const ErrorImg = styled.img`
  position: absolute;
  top: 11px;
  right: 20px;
`;
