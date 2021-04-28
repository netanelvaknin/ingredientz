import styled from 'styled-components/macro';
import {mobile} from '../../utils/screen-sizes';

export const CheckoutContainer = styled.div`
    padding-top: 12rem;
    padding-bottom: 12rem;
    max-width: 100rem;
    margin: 0 auto;

    @media ${mobile} {
      padding: 11rem 2rem 2rem;
    }
`;

export const ListItemText = styled.p`
  text-transform: uppercase;
  margin-top: -2rem;
  flex: 1;
`;