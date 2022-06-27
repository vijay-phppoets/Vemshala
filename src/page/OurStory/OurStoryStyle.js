import styled from "styled-components"

export const MainLeftBox = styled.div`
    width: 42%; 
    padding-bottom: 30px ;
    float: left;
    padding: 10px;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
        padding: 20px;
    }

    @media ${props => props.theme.device.mobileL} {
        width: 100%; 
    }`


export const MainRightBox = styled.div`
    width: 58%; 
    padding-top: 30px;
    padding-right:15px;
    padding-left:20px;
    float: right;  
    
    @media ${props => props.theme.device.tablet} {
        width: 100%;
        padding: 20px;
    }

    @media ${props => props.theme.device.mobileL} {
        width: 100%; 
    }
`