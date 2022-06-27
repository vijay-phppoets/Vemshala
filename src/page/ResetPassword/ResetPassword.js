import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Button, Space, Form, Input, Row, Col, Select, message } from "antd"
import { Link, Redirect } from "react-router-dom"
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./ResetPasswordStyle"
// action   
import { resetPassword, resetPasswordReset } from "../../action/resetPasswordAction"
const ResetPassword = props => {
    // variables & states 
    const {
        resetPassword, resetPasswordReset, resetPasswordState,
    } = props
    const customer_id = props.match.params.customer_id
    const [redirect, setRedirect] = useState(false, "")
    const [otpScreen, setOtpScreen] = useState(false)
    const [formData, setFormData] = useState({
        password: "",
        confirm: "",
    })

    // functions 
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = () => {
        resetPassword({
            customer_id: customer_id,
            ...formData
        })
    }
    useEffect(() => {
        if (resetPasswordState.apiState === "success") {
            message.success(resetPasswordState.message);
            setRedirect([true, '/'])
            resetPasswordReset()
        }
        else if (resetPasswordState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [resetPasswordState])

    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />
            }
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Reset Password</h1>
                </div>
                <MainBox>

                    <div style={{ background: "white", marginBottom: 40, padding: 16 }} >
                        <Form onFinish={handleOnSubmit} layout="vertical">
                            <Row gutter="24">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                        ]}
                                    >
                                        <Input name="password" placeholder="Enter Password"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        rules={[
                                            { required: true, message: 'Please confirm your password!' },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The passwords that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input name="confirm" placeholder="Confirm Password"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Button type="primary" loading={resetPasswordState.apiState === "loading"} block size="large" htmlType="submit"
                                >Set Password</Button>
                            </div>
                        </Form>
                    </div>

                </MainBox>
            </div>
           
        </>
    )
}

const mapStateToProps = (state) => ({
    resetPasswordState: state.resetPassword,
})
const mapDispatchToProps = (dispatch) => ({
    resetPassword: (params) => dispatch(resetPassword(params)),
    resetPasswordReset: () => dispatch(resetPasswordReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
