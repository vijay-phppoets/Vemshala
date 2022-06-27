import styled from "styled-components"
import { Drawer } from 'antd';

export const AccDrawer = styled(Drawer)`

    .ant-drawer-header {
        padding: 24px !important;
    }

    @media ${props => props.theme.device.mobileL} {
        .ant-drawer-content-wrapper {
            width: 90% !important;
        }
    }
`

export const AccountUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
export const AccountLi = styled.li`
    padding: 8px;
    color: rgb(0 0 0 / 74%);
    border-radius: 0%;

    span {
        margin-left: 8px;
        font-size: 16px;
    }

    &:hover {
        background-color: rgb(0 0 0 / 5%);
    }
`