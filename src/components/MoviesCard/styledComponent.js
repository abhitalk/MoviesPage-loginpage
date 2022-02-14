import styled from "styled-components";

export const CardContainer = styled.li`
  list-style-type: none;
  width: 31%;
  height: 100%;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 85%;
    height: 100%;
  }
`;

export const InitialLetter = styled.h1`
  height: 40px;
  width: 35px;
  border-radius: 30px;
  padding: 10px;
  color: #233230;
  background-color: #cbcdcd;
  border: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DetailsCard = styled.div`
  height: 100%;
  overflow: none;
  padding: 20px;
  min-height: 230px;
  justify-content: flex-start;
  @media (min-width: 768px) {
    // height: 25vh;
  }
`;

export const NormalHeading = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  color: #1b201f;
`;

export const NormalDescription = styled.span`
  color: #7e8181;
  font-size: 15px;
`;
