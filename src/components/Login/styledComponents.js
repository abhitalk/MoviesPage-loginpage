import styled from "styled-components";

export const LoginAppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #a74d92;
  min-height: 800px;
`;

export const LoginContainer = styled.div`
  height: 100%;
  width: 25%;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10%;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  -moz-box-shadow: 0 4px 10px #0000001a;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LoginSideContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
  @media screen (min-width: 768px) {
    height: 50vh;
  }
`;

export const LoginSideText = styled.h1`
  font-family: italic;
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 5% 0%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10%;
`;

export const InputLabel = styled.label`
  color: #1c1321;
  font-family: sans-serif;
  font-weight: bold;
  width: 70%;
  margin: auto;
  margin-bottom: 3%;
  margin-top: 0%;
`;

export const InputElement = styled.input`
  border-width: 1px solid #906aa3;
  color: #000000;
  padding: 10px;
  width: 66% !important;
  border-radius: 5px;
  margin: auto;
  background: rgba(192, 192, 192, 0.8);
  border: none;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  -moz-box-shadow: 0 4px 10px #0000001a;
  outline: none;
`;

export const ErrorMessageField = styled.p`
  color: #f13013;
  font-family: sans-serif;
  text-align: center;
`;

export const LoginSubmitButton = styled.button`
  color: white;
  background-color: #a74d92;
  height: 30px;
  width: 72%;
  padding: 10px;
  border-radius: 5px;
  border-width: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
  -moz-box-shadow: 0 4px 10px #0000001a;
`;

export const LoginLoader = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
