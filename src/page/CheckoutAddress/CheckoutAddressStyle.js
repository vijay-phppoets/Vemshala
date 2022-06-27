import styled from "styled-components"
import { Button } from "antd"

export const AddressCard = styled.div`
    width: 450px;
    display: flex;
    border: solid 1px #9c9c9c;
    border-radius: 4px;
    margin-bottom: 16px;
    margin-right: 16px;
    padding: 16px;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }

    &:active {
        transform: scale(0.99);
    }
`

export const NextButton = styled(Button)`
    height: 40px;
    width: 250px;
`