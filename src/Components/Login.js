import React from 'react';
import styled from 'styled-components';

function Login() {
  const currentDate = new Date().toLocaleDateString()
  return (
    <Section>
      <Content>
        <CTA>
          <CTALogoOne src="/Images/cta-logo-one.svg" alt="logo 1" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            {`Get Premium Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of ${currentDate} the price of Disney+
            and The Disney Bundla will increase by $1.`}
          </Description>
          <CTALogoTwo src="/Images/cta-logo-two.png" alt="logo 2"  />
        </CTA>
        <BgImage />
      </Content>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url('/Images/login-background.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16.5px 0;
  cursor: pointer;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 10px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 0 0 24px;
  font-size: 14px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  width: 100%;
`;
export default Login;
