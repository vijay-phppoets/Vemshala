import styled, { css } from "styled-components"
import { Button, Collapse } from "antd"
import { Link } from "react-router-dom"

const { Panel } = Collapse;

export const Price = styled.div`
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
`

export const OutOfStock = styled.div`
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
`
export const RegulerPrice = styled.div`
    font-size: 18px;
    color: #00000066;
    font-weight: bold;
    text-decoration: line-through;
`

export const ShortDescription = styled.p`
    margin-bottom: 32px;
`

export const CartButton = styled(Button)`
    height: 50px;
    width: 100%;
    margin-top: 8px;

    @media ${props => props.theme.device.mobileXL} {
        width: 100%;
    }
`

export const WishlistButton = styled(Button)`
    height: 50px;
    width: 200px;
    margin-top: 8px;
    

    @media ${props => props.theme.device.mobileXL} {
        width: 100%;
        
    }
`

export const Label = styled.span`
    color: #848485;
    margin-right: 8px;
`

export const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`

export const Right = styled.div`
    width: 40%;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`

export const DesktopImgContainer = styled.div`
    width: 100%;
    display: flex;

    @media ${props => props.theme.device.tablet} {
        display: none;
    }
`

export const MobileImgContainer = styled.div`
    max-width: 100%;
    display: none;

    @media ${props => props.theme.device.tablet} {
        display: block;
    }
`

export const RelatedProductWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
    margin-bottom: 32px;
`

export const RelatedProductBox = styled(Link)`
    width: 25%;
    padding-right: 12px;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
    }
`

export const AddInfoTbl = styled.table`
    width: 100%;
`

export const ProductCollapse = styled(Collapse)`
`

export const ProductPanel = styled(Panel)`

    .ant-collapse-header {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #000000a6;
        background-color: #fff;
    }

    .ant-collapse-header span {
        display: none;
    }
`

export const ColorBox = styled.div`
    width: 36px;
    height: 36px;
    padding: 2px;
    border-radius: 18px;
    border: solid 1px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: solid 1px ${props => props.theme.colors.primary};
    }

    ${props => props.active && css`
        border: solid 2px ${props => props.theme.colors.primary} !important;
    `}
`

export const SwatchBtn = styled(Button)`
    ${props => props.active && css`
        border: solid 2px ${props => props.theme.colors.primary} !important;
    `}
`