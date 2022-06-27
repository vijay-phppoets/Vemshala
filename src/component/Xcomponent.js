import styled from "styled-components"
import { Button } from "antd"

export const GlobleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Wrapper = styled.div`
    max-width: 1400px;
    width: 100%;
    padding:0 12px;

    @media ${props => props.theme.device.tablet} {
        padding: 0;
    }

    .sticky-action-bar {
        position: fixed;
        bottom: 0px;
        background: #fff;
        box-shadow: -2px 2px 45px -15px rgb(0 0 0 / 30%);
        transition: all 500ms ease-in-out;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        left: 0;
        right: 0;
        padding:0px 10px;
        border-top: solid 1px #ccccccb8;
    }

    .sticky-action-bar-hide {
        height: 0px;
        opacity: 0;
    }

    .sticky-action-bar-show {
        height: 60px;
        opacity: 1;
    }

`

export const WrapperSm = styled.div`
    max-width: 1000px;
    width: 100%;
    padding:0 12px;
`

export const BlackBtn = styled(Button)`
    border-color: #444444;
    background-color: #444444;
    color: #fff;

    &:hover,
    &:active,
    &:focus {
        border-color: #444444e6;
        background-color: #444444e6;
        color: #fff;
    }
`

export const RedBtn = styled(Button)`
    border-color: #ff5353;
    background-color: #ff5353;
    color: #fff;
    width: 100%;
    &:hover,
    &:active,
    &:focus {
        border-color: #ff5353e6;
        background-color: #ff5353e6;
        color: #fff;
    }
`

