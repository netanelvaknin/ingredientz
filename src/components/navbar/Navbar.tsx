import styled from "styled-components/macro";

const NavbarStyle = styled.nav``;
const FakeLogo = styled.h1``;

export const Navbar = () => {
  return (
    <NavbarStyle>
      <FakeLogo>IngredientZ</FakeLogo>
    </NavbarStyle>
  );
};

export default Navbar;
