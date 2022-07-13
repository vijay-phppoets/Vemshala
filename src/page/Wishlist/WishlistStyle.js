import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button } from "antd"

export const ProductsWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`
export const Container = styled.div`
    padding: 16px;
    border: solid 1px #f5f5f5;
    background-color: #fff;
    width: 100%;
    margin: 16px 4px;
    min-height: 500px;
`

export const ProductsBox = styled.div`
    width: 25%;
    padding: 16px;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
        padding: 8px;
    }

    @media ${props => props.theme.device.mobileL} {
        width: 50%;
        padding: 4px;
    }
`
export const CartBtn = styled(Button)`
    height: 100%;
    width: 100%;
`