import styled from "styled-components"
import { Button } from "antd"
import { Link } from "react-router-dom"

export const mainDiv = styled.div`
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
`

export const contantDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
`
export const contantH1 = styled.h1`
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;
`
export const BlackBtn = styled(Link)`
    border-color: #444444;
    background-color: #444444;
    color: #fff;
    padding: 6px;
    &:hover,
    &:active,
    &:focus {
        border-color: #444444e6;
        background-color: #444444e6;
        color: #fff;
    }
`