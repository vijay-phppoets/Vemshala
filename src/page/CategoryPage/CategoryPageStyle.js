import styled from "styled-components";
import { Link } from "react-router-dom"

export const BannerContainer = styled.div`
    max-height: 400px;
    width: 100%;
    overflow: hidden;

    .m_banner_img {
        display: none;
    }

    @media ${props => props.theme.device.mobileL} {
        .banner_img {
            display: none;
        }

        .m_banner_img {
            display: block;
        }
    }
`

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
        padding: 8px;
    }

    @media ${props => props.theme.device.mobileL} {
        padding: 4px;
    }
`