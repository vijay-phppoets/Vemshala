import styled , { css, keyframes } from "styled-components"
import { Button } from "antd"
import { Badge} from 'antd'

export const NextButton = styled(Button)`
    height: 40px;
    width: 250px;
`
export const AddressValue = styled.span`
    font-size: 14px;
`

export const Xbadge = styled(Badge)`
 line-height: 2 !important;
 display: flex;
 position: absolute;
 top: 5px;
 right: 5px;
 .ant-scroll-number-custom-component {
    top: 5px;
    right: 5px;
 }
`


export const AddressSelectButton = styled(Button)`
`
export const AddressButtonDiv = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 6px;
`


export const AddressCard = styled.div`
    padding: 12px;
    position:  relative;
    width: 250px;
    margin-top: 10px;
    border-radius: 10px;
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

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.align === "left" && css`
        justify-content: flex-start;
    `}

    ${props => props.align === "right" && css`
        justify-content: flex-end;
    `}

    ${props => props.ml && css`
        margin-left: ${props.ml};
    `}

    ${props => props.mr && css`
        margin-left: ${props.mr};
    `}

    ${props => props.mt && css`
        margin-top: ${props.mt};
    `}

    ${props => props.mb && css`
        margin-bottom: ${props.mb};
    `}

    ${props => props.my && css`
        margin: ${props.my} 0;
    `}

    ${props => props.mx && css`
        margin: 0 ${props.mx};
    `}
`