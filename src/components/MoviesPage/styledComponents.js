import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MoviesPageApp = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeading = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 50px;
  font-weight: bold;
`;

export const DetailsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NextPageContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PageNumber = styled.p`
  color: #000000;
  border-radius: 5px;
  padding: 10px 22px;
  background-color: rgba(91, 219, 148, 0.7);
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  color: white;
  border: 1px solid white;
`;

export const NextButton = styled.button`
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  background-color: rgba(91, 219, 148, 0.7);
  height: 36px;
  width: 60px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
`;
