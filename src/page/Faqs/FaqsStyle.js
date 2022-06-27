import styled from "styled-components"

export const Heading = styled.h2`
    font-size: 1.5em; 
    @media ${props => props.theme.device.tablet} {
        font-size: 1.2em; 
    }

    @media ${props => props.theme.device.mobileL} {
        font-size: 1em; 
    }
`

export const Section = styled.div`
    display: flex;
    flex-flow: wrap;
    width:100%;
    justify-content: center;
`

export const SectionLeft = styled.div`
    width: 42%;
    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }

`

export const SectionRight = styled.div`
    width: 58%;
    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`
export const SectionCenter = styled.div`
    width:80%;
    @media ${props => props.theme.device.tablet} {
        width: 100%;
    }
`