import styled from "styled-components"
import { Link } from "react-router-dom"


export const NewArrivalsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`

export const NewArrivalsBox = styled.div`
    width: 25%;
    padding: 16px;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
        padding: 8px;
    }

    @media ${props => props.theme.device.mobileL} {
        padding: 4px;
    }
`