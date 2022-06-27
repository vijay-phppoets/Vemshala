import styled from "styled-components";
import { Button, Input } from "antd"


const { Search } = Input;

export const CartItem = styled.div`
    display: flex;
    padding: 8px 8px;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 8px;
    border: solid 1px rgb(0,0,0,0.1);
`

export const PaymentBtn = styled(Button)`
    height: 50px;
`

export const CouponBar = styled(Search)`
    .ant-input-affix-wrapper {
        /* border-radius: 50px !important; */
    }

    .ant-input-suffix > button {
        margin-right: -3px;
    }

    .ant-input-group-addon {
        display: none;
    }
`

export const PlusMinusBtn = styled(Button)`
    background-color: #f5f5f5;
`
export const ActualPrice = styled.span`
    font-weight: 700;
    margin-right: 8px;
`
export const RegularPrice = styled.span`
    color: #868585;
    margin-right: 8px;
`
export const Discount = styled.span`
    color: ${props => props.theme.colors.primary};
`
