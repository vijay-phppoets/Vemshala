import styled from "styled-components"

export const Container = styled.div`
    background: #e97a7e;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    position: relative;
    font-size: 14px;
    height: 40px;
`

export const CloseBtnContainer = styled.div`
    position: absolute;
    right: 8px;

    .close-button {
        height: 22px;
        width: 40px;
        position: relative;
        box-sizing: border-box;
        line-height: 20px;
        display: inline-block;

        &:before, &:after {
            transform: rotate(-45deg);
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -10px/2;
            margin-left: -20px/2;
            display: block;
            height: 2px;
            width: 20px;
            background-color: #fff;
            transition: all 0.25s ease-out;
        }

        &:after {
            transform: rotate(-135deg);
        }

        &:hover {
            &:before, &:after {
                transform: rotate(0deg);
            }
        }
    }
`