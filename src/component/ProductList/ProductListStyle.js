import styled from "styled-components"
import { Link } from "react-router-dom"

export const ProductsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`

export const ProductsBox = styled.div`
    width: 25%;
    padding: 16px;
    flex: 1 0 auto;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
        padding: 8px;
    }

    @media ${props => props.theme.device.mobileL} {
        width: 50%;
        padding: 4px;
    }
`