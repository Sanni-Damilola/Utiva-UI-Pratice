import React from "react";
import styled from "styled-components";
import hand from "./Asset/hi.ccdfedec.svg";
import line from "./Asset/lines.png";
import fatline from "./Asset/fatline.png";
const Kids = () => {
  return (
    <Container>
      <h6></h6>
      <Div>
        <Wrapper>
          <div>
            <span>
              learn coding and design, programming
              <br /> robototics, data science and ai
            </span>
          </div>
          <div>
            <span>
              providing enterpreneurship and statup <br /> support to kids
            </span>
          </div>
          <div>
            <span>
              pathnership with some of the top <br /> educators around the world
            </span>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <span>
              over 15 years experience working in the <br /> technology space
            </span>
          </div>
          <div>
            <span>
              we will hold the hands of your kids and get <br /> them to love
              tech
            </span>
          </div>
          <div>
            <span>
              stauing focused allows us turn every <br /> project completed into
              reality
            </span>
          </div>
        </Wrapper>

        <Hand src={hand} />
        <Linewr>
          <Line src={line} />
        </Linewr>
        <Linewr1>
          <Line2 src={fatline} />
        </Linewr1>
      </Div>
    </Container>
  );
};

export default Kids;

const Linewr = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  left: 0;
  top: -15%;
`;
const Linewr1 = styled.div`
  width: 150px;
  position: absolute;
  bottom: -15%;
  right: 15%;
`;

const Line = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Line2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Hand = styled.img`
  position: absolute;
  top: -1%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
`;

const Div = styled.div`
  width: 65%;
  height: 55%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 3, 169);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  div {
    text-align: center;
    span {
      font-size: 11px;
      font-weight: 600;
      color: white;
      opacity: 70%;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgb(0, 3, 169);
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;
