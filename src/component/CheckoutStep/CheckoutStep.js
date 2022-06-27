import React from 'react'
import { Steps } from 'antd';

/* CUSTOM COMPONENT */
import { Container, Mcontainer, StepItem, Dot } from "./CheckoutStepStyle"

const { Step } = Steps;


const CheckoutStep = props => {
    return (
        <>
            <Container>
                <Steps
                    progressDot
                    current={props.active}
                    style={{ margin: "16px 8px" }}
                    labelPlacement="horizontal"
                >
                    <Step title="Login" />
                    <Step title="Billing" />
                    <Step title="Shipping" />
                    <Step title="Payment" />
                </Steps>
            </Container>
            <Mcontainer>
                <StepItem active={props.active === 0} >
                    <Dot active={props.active === 0} />
                    <div>Login</div>
                </StepItem>
                <StepItem active={props.active === 1} >
                    <Dot active={props.active === 1} />
                    <div>Billing</div>
                </StepItem>
                <StepItem active={props.active === 2} >
                    <Dot active={props.active === 2} />
                    <div>Shipping</div>
                </StepItem>
                <StepItem active={props.active === 3} >
                    <Dot active={props.active === 3} />
                    <div>Payment</div>
                </StepItem>
            </Mcontainer>
        </>
    )
}

export default CheckoutStep
