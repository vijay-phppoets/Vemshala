import styled from "styled-components";

export const Left = styled.div`
    width: 50%;
    padding: 16px 32px;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`

export const Right = styled.div`
    width: 50%;
    padding: 16px 32px;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`