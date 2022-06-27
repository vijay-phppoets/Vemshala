import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { connect } from "react-redux"
import { Form, Input, Divider, message } from "antd"
import { Link, useLocation } from "react-router-dom"
import {
    HeartOutlined, UserOutlined,
    UnorderedListOutlined, LogoutOutlined, GoogleOutlined
} from "@ant-design/icons"
/* custom component */
import { AccDrawer, AccountLi, AccountUl } from "./AccountDrawerStyle"
import { BlackBtn, RedBtn } from "../../component/Xcomponent"
import GoogleLogin from "react-google-login";
import GoogleButton from 'react-google-button'
/* actions */
import { toggleSignupModal, setCustomerData, setUserLoggedIn, setUserLoggedOut, hideSignupModal, showSignupModal } from "../../action/generalAction"
import { login, loginReset } from "../../action/loginAction"
import { createCustomer, createCustomerReset } from "../../action/createCustomerAction"
/* other */
import { getCustomer, setToken, setCustomer, removeCustomer, removeToken, getCartId } from '../../utils'

const AccountDrawer = props => {
    /* variable and state */
    const location = useLocation();
    const {
        toggleSignupModal, showSignupModal, hideSignupModal, setCustomerData, setUserLoggedIn, setUserLoggedOut, generalState,
        login, loginReset, loginState,
        createCustomer, createCustomerReset, createCustomerState,
    } = props
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    /* callback */
    useEffect(() => {
        setCustomerData({
            customer: getCustomer()
        })
    }, [])

    useEffect(() => {
        if (loginState.apiState === "error") {
            message.error(loginState.message);
            loginReset()
        }
        if (loginState.apiState === "success") {
            message.success(loginState.message);
            setToken(loginState.token)
            props.onClose()
            setUserLoggedIn()
            setCustomer(loginState.customer)
            setCustomerData({
                customer: loginState.customer
            })
            loginReset()
        }
    }, [loginState])

    useEffect(() => {
        if (createCustomerState.apiState === "error") {
            message.error(createCustomerState.message);
            // message.error("Something went wrong. Please try later");
        }
        if (createCustomerState.apiState === "success") {
            props.onClose(true)
            console.log(createCustomerState.customer.signup_method)
            if (createCustomerState.customer.signup_method === "website") {
                hideSignupModal()
            }
            message.success(createCustomerState.message);
            setToken(createCustomerState.token)
            setUserLoggedIn()
            setCustomer(createCustomerState.customer)
            setCustomerData({
                customer: createCustomerState.customer
            })
            createCustomerReset()

        }
    }, [createCustomerState])

    /* function */
    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        login({
            cart_id: getCartId(),
            ...formData
        })
    }

    const handleLogout = () => {
        message.success("You are logged out successfully.");
        removeToken()
        props.onClose()
        setUserLoggedOut()
        removeCustomer()
        setCustomerData({
            customer: null
        })
    }
    const responseGoogle = (response) => {
        if (response.type === "error") {
            return false;
        }
        console.log("response:", response)
        createCustomer({
            signup_method: "google",
            name: response.profileObj.name,
            email: response.profileObj.email,
            id_token: response.tokenObj.id_token,
        });
    };

    return (
        <AccDrawer
            title="ACCOUNT"
            placement="right"
            visible={props.accountVisible}
            onClose={() => props.onClose()}
            width={isMobile ? "90%" : 450}
        >
            {!generalState.isUserLoginIn &&
                <div style={{ padding: "0px 40px" }} >
                    <Form
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Required' },
                                { type: 'email', message: 'Email is not valid' },
                            ]}
                        >
                            <Input name="email" placeholder="Email" 
                                size='large'
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                { required: true, message: 'Required' },
                            ]}
                        >
                            <Input.Password name="password" placeholder="Password"
                                size='large'
                                onChange={handleInputChange}
                            />
                        </Form.Item>
                        <BlackBtn type="primary" block size="large" htmlType="submit"
                            loading={loginState.apiState === "loading"}
                        >LOGIN</BlackBtn>
                        <div style={{ display: "flex", justifyContent: "flex-end" }} >
                            <Link to="/forgot-password"
                                onClick={() => {
                                    props.onClose(false)
                                }}
                            >Forgot Password?</Link>
                        </div>
                    </Form>
                    <Divider plain>OR</Divider>

                    <GoogleLogin
                        clientId="15117413891-dgacpafu1fiicn3tqkr9jqv6uch2q3sp.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        render={renderProps => (
                            <GoogleButton style={{ width: "100%" }} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                        )}
                    />
                    <Divider plain>OR</Divider>

                    <BlackBtn type="primary" block size="large"
                        onClick={() => {
                            props.onClose(false)
                            showSignupModal()
                        }}
                    >Create an Account</BlackBtn>
                    <div style={{ marginTop: 8 }} >
                        <p style={{ fontSize: 12 }} >Thanks to your Piky account, you will be able to:</p>
                        <ul style={{ fontSize: 12 }} >
                            <li>Access your shopping cart</li>
                            <li>Save your billing and delivery information to order faster</li>
                            <li>Manage your address book</li>
                            <li>Access all your orders and download the related invoices</li>
                            <li>Manage your newsletter subscription</li>
                            <li>Update your personal data</li>
                        </ul>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginTop: 32, fontSize: 12 }} >
                        <h3 style={{ alignSelf: "center" }} >HERE TO HELP</h3>
                        <span>Have a question? You may find an answer in our FAQs.</span>
                        <span>But you can also contact us:</span>
                        <h3 style={{ marginTop: 12 }} >Customer Service</h3>
                        <span>Call 0000-000-000</span>
                        <span>Monday through Friday: 9am - 6pm ET</span>
                        <span>Saturday: 10am - 6pm ET</span>
                        <span>Send us an email</span>
                    </div>
                </div>
            }

        </AccDrawer>
    )
}

const mapStateToProps = (state) => ({
    generalState: state.general,
    loginState: state.login,
    createCustomerState: state.createCustomer,
})
const mapDispatchToProps = (dispatch) => ({
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    showSignupModal: () => dispatch(showSignupModal()),
    hideSignupModal: () => dispatch(hideSignupModal()),
    setCustomerData: (params) => dispatch(setCustomerData(params)),
    login: (params) => dispatch(login(params)),
    loginReset: () => dispatch(loginReset()),
    createCustomer: (params) => dispatch(createCustomer(params)),
    createCustomerReset: () => dispatch(createCustomerReset()),
    setUserLoggedIn: () => dispatch(setUserLoggedIn()),
    setUserLoggedOut: () => dispatch(setUserLoggedOut()),
})
export default connect(mapStateToProps, mapDispatchToProps)(AccountDrawer)