import styled from "styled-components/macro";

const NavbarStyle = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 30%);
  position: fixed;
  width: 100%;
  background: #fff;
  padding: 0 10rem;
  z-index: 999;
`;

const FakeLogo = styled.h1`
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.main};
`;

const LastLetter = styled.span`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const Navbar = () => {
  return (
    <NavbarStyle>
      <FakeLogo>
        INGREDIENT<LastLetter>Z</LastLetter>.
      </FakeLogo>
    </NavbarStyle>
  );
};

export default Navbar;
