import styled from 'styled-components/macro';
import {mobile} from '../../utils/screen-sizes';

export const LandingPageContainer = styled.div`
  padding-top: 12rem;
  padding-bottom: 12rem;
  max-width: 100rem;
  margin: 0 auto;

  @media ${mobile} {
    padding: 11rem 2rem 2rem;
  }
`;

export const PrimaryHeading = styled.h1`
  max-width: 40rem;
  font-size: 5rem;
  line-height: 1.2;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary.main};
`;

export const AdditionalParagraph = styled.p`
  max-width: 38rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 1.7rem;
`;

export const Greeting = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: block;
`;

export const HelloAnimationContainer = styled.div`
  & > div {
    outline: none;
    margin: unset;
    margin-left: 10rem !important;
    margin-bottom: -0.9rem !important;
    transform: rotate(25deg);
  }
`;