import styled from 'styled-components/macro';
import {Button} from '@material-ui/core';

export const CTAButton = styled(Button).attrs(props => ({
    variant: 'contained'
}))`
    &,
    &:hover {
        background: ${props => props.theme.palette.secondary.main};
        border-radius: 2rem;
        width: 20rem;
        height: 4rem;
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }
`;