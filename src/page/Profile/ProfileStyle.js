import styled from "styled-components";
import { Badge} from 'antd'

export const Container = styled.div`
    padding: 16px;
    border: solid 1px #f5f5f5;
    background-color: #fff;
    width: 100%;
    text-align: center;
    margin: 16px 4px;
    min-height: 500px;
`


export const AddressCard = styled.div`
    padding: 12px;
    position: relative;
    width: 250px;
    margin-top: 10px;
    border-radius: 10px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 10px;
    min-height: 180px;
    border: ${props => props.active ? "dashed 1px #49cc49" : "dashed 1px #a0a0a0"};
    background-color: ${props => props.active ? "#f3fdf3" : "transparent"};
`

export const AddressCardContainer = styled.div`
`

export const Label = styled.span`
    font-size: 14px;
    font-weight: bold;
`
export const NewAddressCard = styled.div`
    border: 1px dashed black;
    text-align: center;
    border: dashed 1px #a0a0a0;
    padding: 12px;
    width: 250px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
    min-height: 180px;
    padding-top: 31%;
`
export const AddressValue = styled.span`
    font-size: 14px;
`

export const Xbadge = styled(Badge)`
 line-height: 2 !important;
 display: flex;
 position: absolute;
 top: 10px;
 right: 10px;
 .ant-scroll-number-custom-component {
    top: 5px;
    right: 5px;
 }
 `