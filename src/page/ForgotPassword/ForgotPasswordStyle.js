import styled from "styled-components"

export const MainBox = styled.div`
    width: 100%;
    padding-left: 200px;
    padding-right: 200px;
    font-size: "15px";

    @media ${props => props.theme.device.tablet} { 
        padding-left: 50px;
        padding-right: 50px;
        width: 100%;
    }

    @media ${props => props.theme.device.mobileL} {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    }
`
