import React from "react"
import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onConfirm}/>
      <StyledCard>
        <StyledHeader>
          <HeaderText>{props.title}</HeaderText>
        </StyledHeader>
          <Content>
            <p>{props.message}</p>
          </Content>
        <Footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </Footer>
      </StyledCard>
    </div>
  )
};

export default ErrorModal;

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const StyledHeader = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const HeaderText = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;