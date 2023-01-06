import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const Bussiness_any = () => {
  return (
    <Container>
      <Div1>
        <Wrapper>
          <h6>
            Begin your <br /> business analysis <br /> journey <b>with</b>{" "}
            <span>Utiva</span>
          </h6>

          <span>Possible career path in Business Analysis</span>

          <Div>
            <Icon>
              <FiArrowRight />
              <p>Business Anaylst</p>
            </Icon>
            <Icon>
              <FiArrowRight />
              <p>Business Manager</p>
            </Icon>
          </Div>
          <Getstarted>
            <p>Get Started</p>
            <FiArrowRight />
          </Getstarted>
        </Wrapper>
      </Div1>
      <Div2>
        <Wrapper1>
          <h4>Quick Facts</h4>
          <div>
            <div>
              <span>$120,000</span>
            </div>
          </div>

          <span>Average salary of a Business Anaylst</span>
          <p>Source: Glassdoor</p>
          <nav>
            Business Analysis has been identified as one of the skills for the
            future of work, according to a 2021 report by the World Economic
            Forum, citing it as the next wave of information technology for
            individuals, companies and governments.
          </nav>
        </Wrapper1>
        <Circle></Circle>
      </Div2>
    </Container>
  );
};

export default Bussiness_any;

const Wrapper = styled.div`
  h6 {
    margin: 0;
    font-size: 56px;
    font-weight: 700;
    line-height: 60px;
    color: rgb(254, 254, 254);
    padding-bottom: 30px;

    span {
      margin: 0;
      background-image: linear-gradient(to right, #e5ad22, #0b6963);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 52px;
      font-weight: 700;
    }
    b {
      margin: 0;
      background-image: linear-gradient(to right, #86cdd8, #ccba65);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 53px;
      font-weight: 700;
    }
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: rgb(254, 254, 254);
  }
`;
const Wrapper1 = styled.div`
  width: 500px;

  h4 {
    padding-right: 10px;
    font-size: 30px;
    color: rgb(254, 254, 254);
    margin: 0;
    padding-bottom: 20px;
  }

  div {
    width: 200px;
    height: 70px;
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: #faae1b;
    position: relative;
    margin-left: 10px;

    div {
      span {
        font-size: 45px;
        position: absolute;
        left: 10%;
        font-weight: 700;
        color: rgb(254, 254, 254);
      }
      width: 200px;
      height: 70px;

      position: absolute;
      top: -10%;
      right: 5%;
      background-color: rgb(16, 166, 98);
    }
  }

  span {
    font-size: 16px;
    color: rgb(254, 254, 254);
    font-weight: 500;
  }

  p {
    color: rgb(95, 97, 248, 0.5);
    font-weight: 500;
  }

  nav {
    display: flex;
    justify-content: space-between;
    color: rgb(254, 254, 254);
    font-weight: 500;
    margin-left: 17px;
  }
`;

const Circle = styled.div`
  margin-right: 8px;
  width: 5px;
  height: 5px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(254, 254, 254);
  position: absolute;
  bottom: 35%;
  left: 9%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  margin-top: 40px;
  `;
const Div1 = styled.div`
  background-color: rgb(0, 2, 105);
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: rgb(254, 254, 254);
  p {
    color: rgb(254, 254, 254);
    font-size: 15px;
    font-weight: 500;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  p {
    padding-left: 6px;
  }
`;
const Getstarted = styled.div`
  background-color: #faae1b;
  width: 160px;
  height: 50px;
  border-radius: 7px;
  font-size: 17px;
  color: rgb(254, 254, 254);

  p {
    padding-right: 8px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    margin-top: -6px;
    transition: all 200ms;
  }
`;
const Div2 = styled.div`
  width: 45%;
  background-color: rgb(0, 3, 169);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
