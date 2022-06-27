import styled from "styled-components";
import { Button } from "antd"

export const Container = styled.div`
    position: relative;

    .action-btns {
            display: none;
            position: absolute;
            bottom: 60px;
            left: 0;
            right: 0;
            height: 50px;
        }

    &:hover {
        .action-btns {
            display: flex;
        }
    }
`

export const Description = styled.div`
    padding: 10px;
`

export const CartBtn = styled(Button)`
    height: 100%;
    width: 100%;
`