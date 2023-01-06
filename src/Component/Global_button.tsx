import React from "react";
import styled from "styled-components";

interface props {
  text: string;
  heg: string;
  bg: string;
  mt: string;
}

const Global_button: React.FC<props> = ({ text, heg, bg, mt }) => {
  return (
    <Container>
      <Button mt={mt} heg={heg} bg={bg}>
        {text}
      </Button>
    </Container>
  );
};

export default Global_button;

const Container = styled.div``;
const Button = styled.button<{ heg: string; bg: string; mt: string }>`
  padding: ${({ heg }) => (heg ? "12px" : "20px")} 23px;
  background-color: ${({ bg }) => (bg ? "red" : "rgb(0, 3, 169)")};
  border: 0;
  outline: none;
  font-size: 15px;

  font-weight: 600;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  text-transform: capitalize;

  :hover {
    margin-top: ${({ mt }) => (mt ? "-5px" : "0")};
    transition: all 350ms;
  }
`;
