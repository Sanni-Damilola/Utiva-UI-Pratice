import React from "react";
import styled from "styled-components";
import Global_button from "./Global_button";
import circle5 from "./Asset/circle5.jpg";
import circle6 from "./Asset/circle6.jpg";
import circle7 from "./Asset/circle7.jpg";
import circle1 from "./Asset/circle1.jpg";

const First = () => {
  return (
    <Container>
      <Div1>
        <span>for early proffessional</span>
        <h1>
          Data Incubator <br /> Africa
        </h1>
        <p>
          The Data incubator program of the data School is designed <br /> for
          very early proffectionals as an immersion program to help <br />{" "}
          kick-start journey being a data analyst
        </p>

        <br />

        <Button>
          <Global_button mt="value" text="Entol Now" heg="" bg="" />
          <Global_button mt="value" text="chat with us" heg="" bg="value" />
        </Button>

        <Wrapper>
          <Circle1>
            <Img src={circle5} />
          </Circle1>
          <Circle2>
            <Img src={circle6} />
          </Circle2>
          <Circle3>
            <Img src={circle7} />
          </Circle3>
          <i>Over 500 proffectionals</i>
        </Wrapper>
      </Div1>
      <Div2>
        <Image src={circle1} />
      </Div2>
    </Container>
  );
};

export default First;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% 50% 0 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;

  i {
    margin-left: 90px;
    font-weight: 500;
    font-size: 14px;
    color: rgb(0, 0, 0, 0.7);
  }
`;
const Circle1 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
`;
const Circle2 = styled.div`
  position: absolute;
  left: 4%;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
const Circle3 = styled.div`
  border-radius: 50%;
  left: 7%;
  width: 30px;
  height: 30px;
  position: absolute;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;
`;
const Div1 = styled.div`
  width: 40%;
  span {
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
    color: rgb(0, 0, 0, 0.5);
  }

  h1 {
    font-weight: 800;
    font-size: 50px;
    margin: 0;
    color: darkblue;
  }

  p {
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
    font-size: 16px;
    text-transform: capitalize;
  }
`;
const Div2 = styled.div`
  width: 50%;
  height: 100%;
`;

const Button = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
