import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import Global_button from "./Global_button";
import img from "./Asset/utivacolored.7364336b.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={img} />
        <Nav>
          <Span>
            <span>school</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
          <Span>
            <span>enterprice</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
          <Span>
            <span>company</span>
            <Icon>
              <BiChevronDown />
            </Icon>
          </Span>
        </Nav>
        <Button_wrapper>
          <Global_button mt="" bg="" text="get started" heg="value" />
          <Button>login</Button>
        </Button_wrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  /* background-color: rgb(10, 22, 39); */
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: 100%;
  background-color: rgb(0, 2, 105);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Logo = styled.img`
  object-fit: contain;
  cursor: pointer;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 25px;
`;
const Span = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  span {
    color: rgb(86, 86, 86);
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    color: white;
  }
`;

const Button = styled.button`
  padding: 10px 35px;
  border: 1px solid #050794;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  text-transform: capitalize;
  background-color: transparent;
`;
const Nav = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button_wrapper = styled.div`
  display: flex;
  width: 19%;
  justify-content: space-between;
`;
