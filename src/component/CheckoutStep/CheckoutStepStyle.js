import styled, { css } from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media ${props => props.theme.device.tablet} {
        display: none;
    }
`

export const Mcontainer = styled.div`
    display: none;
    justify-content: space-around;
    margin: 16px 2px;

    @media ${props => props.theme.device.tablet} {
        display: flex;
    }
`

export const StepItem = styled.div`
    color: rgba(0, 0, 0, 0.45);
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;

    ${props => props.active && css`
        color: rgba(0, 0, 0, 1);
        font-weight: bold;
    `};
`

export const Dot = styled.div`
    height: 8px;
    width: 8px;
    background: rgba(0,0,0,0.4);
    border-radius: 4px;
    margin-right: 4px;

    ${props => props.active && css`
        background: ${props => props.theme.colors.primary};
    `};
`