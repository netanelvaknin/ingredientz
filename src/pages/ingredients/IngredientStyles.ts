import styled from 'styled-components/macro';
import {makeStyles, IconButton} from '@material-ui/core';
import {mobile} from '../../utils/screen-sizes';

export const IngredientsPageContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding-top: 12rem;
  padding-bottom: 12rem;
`;

export const useListItemStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
});

export const IngredientText = styled.span`
  flex: 1;
`;

export const IngredientName = styled(IngredientText)`
  font-weight: bold;
  text-transform: uppercase;
  margin-top: -2rem;
`;

interface CountButtonProps {
  variant: "plus" | "minus";
}
export const CountButton = styled(IconButton)<CountButtonProps>`
  border: 1px solid black;
  margin: 0.5rem;

  svg {
    fill: white;
  }

  &.Mui-disabled svg {
    fill: #ccc;
  }

  &,
  &:hover {
    background: ${(props) =>
      props.variant === "plus"
        ? props.theme.palette.secondary.main
        : props.theme.palette.primary.main};
  }
`;

export const SummaryBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 10rem;
  bottom: 0;
  left: 0;
  z-index: 999;
  padding: 0 27rem;
  background: white;
  box-shadow: 0 10px 32px 4px rgb(0 0 0 / 30%);

  @media ${mobile} {
      padding: 0 1rem;
  }
`;
