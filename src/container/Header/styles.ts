import styled from "styled-components";

export const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0px 6px 6px -1px rgba(130, 130, 130, 0.6);
  position: relative;
`;

export const Nav = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 1023px) {
      display: ${({ isOpen }) => (isOpen ? "block" : "none")};
      text-align: center;
      background-color: #fff;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      padding: 16px 0;
    }
  }

  li {
    padding: 16px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;

    @media only screen and (max-width: 1023px) {
      font-size: 20px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  div {
    width: 30px;
    height: 4px;
    background-color: #000;
  }

  @media only screen and (max-width: 1023px) {
    display: flex;
  }
`;
