import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #5bdb94;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
`;

export const LinksContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 575px) {
    width: 100px;
  }
`;

export const NavbarButton = styled.button`
  background-color: transparent;
  border: 1px solid white !important;
  padding: 5px 20px;
  border-radius: 5px;
  float: right;
  color: white;
  box-shadow: 0 4px 10px #0000001a;
  -webkit-box-shadow: 0 4px 10px #0000001a;
`;
