import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    
`

export const CategoryWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`


export const CategoryBox = styled.div`
    width: 25%;
    padding: 16px;

    @media ${props => props.theme.device.mobileXL} {
        width: 100%;
    }
`


export const CategoryImgBox = styled(Link)`
    height: 450;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: "#f5f5f5";

    img {
        transition: all 500ms ease-in-out;
        transform: scale(1);
    }

    &:hover {
        img {
            transition: all 500ms ease-in-out;
            transform: scale(1.1);
        }
    }
`

export const CategoryImgTitle = styled.div`
    font-size: 16px;
    padding: 10px;
    font-weight: 600;
    text-align: center;
`

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

export const FooterWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: wrap;
`

export const FooterBox = styled(Link)`
    width: 25%;
    padding: 16px;

    @media ${props => props.theme.device.tablet} {
        width: 50%;
    }
`

export const FooterTitle = styled.p`
    font-size: 16px;
    color: #fff;
`

export const FooterLink = styled(Link)`
    font-size: 14px;
    color: #fff;
`