import styled from "styled-components"
import { Drawer, Button, Input } from 'antd';
const { Search } = Input;

export const HideInMobile = styled.div`
    @media ${props => props.theme.device.mobileL} {
        display: none;
    }
`

export const HideInTablet = styled.div`
    @media ${props => props.theme.device.tablet} {
        display: none;
    }
`

export const HideInLaptopS = styled.div`
    @media ${props => props.theme.device.laptopS} {
        display: none;
    }
    &:hover > .mega-menu-container{
        display: block;
    }
`

export const SubContainer = styled.div`
    max-width: 1240px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    @media ${props => props.theme.device.mobileL} {
        padding: 4px;
    }

    .mega-menu-container {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 900px;
        top: 0px;
        display: none;
        overflow: scroll;
        margin-top:68px;
        background-color: #fff;
        border-radius: 4px;
    }
`

export const MenuDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        width: 400px !important;
    }

    .ant-drawer-body {
        padding: 0px;
    }

    .ant-drawer-footer {
        padding: 0px;
    }

    @media ${props => props.theme.device.mobileL} {
        .ant-drawer-content-wrapper {
            width: 90% !important;
        }
    }
`



export const CartDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        width: 400px !important;
    }

    .ant-drawer-header {
        padding: 24px !important;
    }

    @media ${props => props.theme.device.mobileL} {
        .ant-drawer-content-wrapper {
            width: 90% !important;
        }
    }
`

export const CartCount = styled.span`
    background: ${props => props.theme.colors.primary};
    padding: 0px 5px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    margin-left: 4px;
    line-height: 20px;
`

export const CatBtn = styled(Button)`
    height: 70px;
    
    span {
        text-transform: uppercase;
    }
`

export const SearchHeader = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .backSearchBtn {
        display: none;
    }

    @media ${props => props.theme.device.tablet} {
        .searchLogo {
            display: none;
        }
        .closeSearchBtn {
            display: none;
        }
        .backSearchBtn {
            display: block;
        }
    }
    
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    width: 600px;

    @media ${props => props.theme.device.tablet} {
        width: 100%;
        margin-right: 8px;
    }
`

export const SearchBar = styled(Search)`
    .ant-input-affix-wrapper {
        border-radius: 50px !important;
    }

    .ant-input-suffix > button {
        margin-right: -3px;
    }

    .ant-input-group-addon {
        display: none;
    }
`
