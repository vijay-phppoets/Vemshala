import styled from "styled-components"
import { Link } from "react-router-dom"

export const SubCatsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`

export const SubCatsBox = styled(Link)`
    width: 25%;
    padding: 16px;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
    }
`