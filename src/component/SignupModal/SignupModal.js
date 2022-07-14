import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { Button, Form, Input, message } from "antd"
import { Redirect, useLocation } from 'react-router-dom'

/* CUSTOM COMPONENT */
import { SgnModal } from "./SignupModalStyle"

/* ACTION */
import { toggleSignupModal, setUserLoggedIn, setCustomerData } from "../../action/generalAction"
import { createCustomer, createCustomerReset } from "../../action/createCustomerAction"

/* OTHER */
import { setToken, setCustomer } from "../../utils"

const SignupModal = props => {
    /* VARIABLE & STATE */
    const {
        toggleSignupModal, setUserLoggedIn, setCustomerData, generalState,
        createCustomer, createCustomerReset, createCustomerState,
    } = props
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        signup_method: "website",
        id_token: ""
    })
    const location = useLocation();
    const [redirect, setRedirect] = useState([false, ''])

    /* CALLBACK */
    // useEffect(() => {
    //     if (createCustomerState.apiState === "error") {
    //         message.error(createCustomerState.message);

    //         // message.error("Something went wrong. Please try later");
    //     }
    //     if (createCustomerState.apiState === "success") {
    //         // message.success(createCustomerState.message);
    //         setFormData({
    //             name: "",
    //             email: "",
    //             password: "",
    //             signup_method: "website",
    //             id_token: ""
    //         })
    //         setToken(createCustomerState.token)
    //         if (createCustomerState.customer.signup_method === "website") {
    //             // toggleSignupModal()
    //         }
    //         setUserLoggedIn()
    //         setCustomer(createCustomerState.customer)
    //         setCustomerData({
    //             customer: createCustomerState.customer
    //         })
    //         createCustomerReset()
    //         if (location.pathname === "/checkout/login") {
    //             setRedirect([true, '/checkout/billing'])
    //         }
    //     }
    // }, [createCustomerState])

    /* FUNCTION */
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        if(formData.contact_no.length < 10) { return alert('please enter valid contact no') }

        createCustomer(formData)
    }

    const [form] = Form.useForm();
    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />}
            <SgnModal
                title="Create an account with us"
                visible={generalState.signupModalVisible}
                footer={null}
                onCancel={() => {
                    form.resetFields();
                    toggleSignupModal()}}
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        id='signUpModal'
                        name="name"
                        label="Full Name"
                        rules={[
                            { required: true, message: 'Required' },
                        ]}
                    >
                        <Input name="name" size="large" placeholder="Enter Full Name"
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Required' },
                            { type: 'email', message: 'Email is not valid' },
                        ]}
                    >
                        <Input name="email" size="large" placeholder="Enter Email"
                            onChange={handleInputChange}
                        />
                    </Form.Item>

                    <Form.Item name="contact_no" label="Contact Number" rules={[{ required: true, message: 'Required' }]}>
                        <Input name="contact_no" size="large" placeholder="Enter Contact No" onChange={handleInputChange}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Set Password"
                        rules={[
                            { required: true, message: 'Required' },
                        ]}
                    >
                        <Input.Password name="password" size="large" placeholder="Enter New Password"
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Button type="primary" size="large" loading={createCustomerState.apiState === "loading"} htmlType="submit" block >CREATE ACCOUNT</Button>
                </Form>
            </SgnModal>
        </>
    )
}

const mapStateToProps = (state) => ({
    generalState: state.general,
    createCustomerState: state.createCustomer,
})
const mapDispatchToProps = (dispatch) => ({
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    setUserLoggedIn: () => dispatch(setUserLoggedIn()),
    createCustomer: (params) => dispatch(createCustomer(params)),
    createCustomerReset: () => dispatch(createCustomerReset()),
    setCustomerData: (params) => dispatch(setCustomerData(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
