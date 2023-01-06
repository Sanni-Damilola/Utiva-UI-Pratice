import React from "react";
import styled from "styled-components";
import logo from "./Asset/utivacolored.7364336b.svg";
import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
            <p>
              We are the leading TECH EDUCATION <br /> company with students
              from over 30 countries <br /> and a leading UK accreditation to
              deliver the <br /> best digital workforce training.
            </p>
            <Socials>
              <BsFacebook />
              <AiFillInstagram />
              <BsLinkedin />
              <BsYoutube />
              <BsTwitter />
            </Socials>
          </FirstDiv>
          <SecondDiv>
            <Box>
              <Title>Top Courses</Title>
              <Nav>Data Accelerator</Nav>
              <Nav>Data Incubator</Nav>
              <Nav>Data Science Fellowship</Nav>
              <Nav>Product Incubator</Nav>
              <Nav>UI/UX Design</Nav>
            </Box>
            <Box>
              <Title>Grow with Utiva</Title>
              <Nav>Individual</Nav>
              <Nav>Business</Nav>
              <Nav>Impact</Nav>
              <Nav>Utiva Kids</Nav>
              <Nav>The Nucleus</Nav>
              <Nav>Ubuntu</Nav>
              <Nav>Utiva Hire</Nav>
            </Box>
            <Box>
              <Title>Schools</Title>
              <Nav>Data School</Nav>
              <Nav>Design School</Nav>
              <Nav>Product School</Nav>
              <Nav>Programming School</Nav>
              <Nav>Cloud Computing School</Nav>
              <Nav>Blockchain Dev. School</Nav>
              <Nav>Marketing School</Nav>
            </Box>
            <Box>
              <Title>Company</Title>
              <Nav>About us</Nav>
              <Nav>Affiliate</Nav>
              <Nav>Our Partners</Nav>
              <Nav>Become a Trainer</Nav>
              <Nav>Alumni</Nav>
              <Nav>Careers</Nav>
              <Nav>Business Network</Nav>
              <Nav>Podcast</Nav>
            </Box>
            <Box>
              <Title>Resources</Title>
              <Nav>Blog</Nav>
              <Nav>FAQs</Nav>
              <Nav>Events</Nav>
              <Nav>Success Stories</Nav>
              <Nav>Masterclass</Nav>
              <Nav>Consulting Practice</Nav>
              <Nav>Scholarship</Nav>
            </Box>
            <Box>
              <Title>Policies</Title>
              <Nav>Terms and Conditions</Nav>
              <Nav>Refund Policy</Nav>
              <Nav>Privacy Policy</Nav>
            </Box>
            <Box>
              <Title>Contact</Title>
              <Nav>info@utiva.io</Nav>
              <Nav>+234 803 515 2982</Nav>
              <Nav>+234 803 515 2982</Nav>
              <Nav>01 229 7777</Nav>
            </Box>
          </SecondDiv>
        </Wrapper>
        <CopyT>
          <span>© 2022 Utiva. All right reserved.</span>
        </CopyT>
      </Container>
    </div>
  );
};

export default Footer;

const CopyT = styled.div`
  text-align: center;
  color: #1e2027;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.8;
`;
const Box = styled.div``;
const Title = styled.div`
  margin: 0;
  margin-bottom: 1.75rem;
  line-height: 1.25rem;
  font-weight: 700;
  font-size: 0.9375rem;
  color: #1e2027;
`;
const Nav = styled.p`
  color: 1e2027;
  transition: all ease-in 0.2s;
  padding-bottom: 10px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 3px;

  :hover {
    cursor: pointer;
    color: #ffda0a;
    font-weight: 600;
  }
`;

const Logo = styled.img``;
const Socials = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0707b8;
  font-size: 1.3rem;
  margin-top: 30px;
`;
const FirstDiv = styled.div`
  width: 350px;

  /* height: 200px; */
  margin-top: 40px;

  p {
    color: #1e2027;
    margin-top: 30px;
    font-size: 0.9375rem;
    line-height: 1.5rem;
  }
`;
const SecondDiv = styled.div`
  width: 70%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px;
  width: 91%;
`;
const Container = styled.div`
  /* height: 60vh; */
  width: 100%;
  /* background-color: rgb(8, 19, 31); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 90px;
  padding-top: 50px;
`;
