import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Button, Space, Form, Input, Row, Col, Select, message } from "antd"
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./ForgotPasswordStyle"
// action   
import { sendOtp, sendOtpReset } from "../../action/sendOtpAction"
const ForgotPassword = props => {
    // variables & states 
    const {
        sendOtp, sendOtpReset, sendOtpState,
    } = props
    const [formData, setFormData] = useState({
        email: "",
    })

    // functions 
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = () => {
        sendOtp({
            ...formData
        })
    }
    useEffect(() => {
        if (sendOtpState.apiState === "success") {
            message.success(sendOtpState.message);
            sendOtpReset()
        }
        else if (sendOtpState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [sendOtpState])

    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Forgot Password</h1>
                </div>
                <MainBox>

                    <div style={{ background: "white", marginBottom: 40, padding: 16 }} >
                        <Form onFinish={handleOnSubmit} layout="vertical">
                            <Row gutter="24">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, message: 'Required' },
                                            { type: 'email', message: 'Email is not valid' },
                                        ]}
                                    >
                                        <Input name="email" placeholder="Enter Email"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Button type="primary" loading={sendOtpState.apiState === "loading"} block size="large" htmlType="submit"
                                >Reset Password</Button>
                            </div>
                        </Form>
                    </div>

                </MainBox>
            </div>
           
        </>
    )
}

const mapStateToProps = (state) => ({
    sendOtpState: state.sendOtp,
})
const mapDispatchToProps = (dispatch) => ({
    sendOtp: (params) => dispatch(sendOtp(params)),
    sendOtpReset: () => dispatch(sendOtpReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
