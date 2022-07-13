import React, { useEffect, useState } from 'react'
import { Button, Drawer, message, Menu, Dropdown, Input, Form, Divider } from "antd"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"

/* CUSTOM COMPONENT */
import { GlobleBox, WrapperSm, BlackBtn } from "../../component/Xcomponent"
import CheckoutStep from "../../component/CheckoutStep/CheckoutStep"
import CheckoutHeader from "../../component/CheckoutHeader/CheckoutHeader"
import { Left, Right } from "./LoginStyle"
import GoogleLogin from "react-google-login";
import GoogleButton from 'react-google-button'

/* actions */
import { toggleSignupModal, setUserLoggedIn, setCustomerData } from "../../action/generalAction"
import { createCustomer, createCustomerReset } from "../../action/createCustomerAction"
import { login, loginReset } from "../../action/loginAction"

/* other */
import { setToken, setCustomer, getCartId } from "../../utils"

const Login = props => {
    /* variable & state */
    const {
        toggleSignupModal, setUserLoggedIn, setCustomerData,
        login, loginReset, loginState,
        createCustomer, createCustomerReset, createCustomerState,
    } = props
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [redirect, setRedirect] = useState([false, ""])

    /* callback */
    useEffect(() => {
        if (loginState.apiState === "error") {
            message.error("Something went wrong. Please try later");
            loginReset()
        }
        if (loginState.apiState === "success") {
            message.success(loginState.message);
            setToken(loginState.token)
            setUserLoggedIn()
            setCustomer(loginState.customer)
            setCustomerData({
                customer: loginState.customer
            })
            setRedirect([true, '/checkout/billing'])
            loginReset()
        }
    }, [loginState])

    useEffect(() => {
        if (createCustomerState.apiState === "error") {
            // message.error(createCustomerState.message);
        }
        if (createCustomerState.apiState === "success") {
            if (createCustomerState.customer.signup_method == "website") {
                toggleSignupModal()
            }
            if (createCustomerState.customer.signup_method != "website") {
                message.success(createCustomerState.message);
            }
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
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />}
            <GlobleBox>
                <WrapperSm>
                    <CheckoutStep active={0} />
                    <div style={{ display: "flex", justifyContent: "space-around", flexFlow: "wrap", background: "white", margin: 16 }} >
                        <Left>
                            <Form layout="vertical" onFinish={handleSubmit}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        { required: true, message: 'Required' },
                                        { type: 'email', message: 'Email is not valid' },
                                    ]}
                                >
                                    <Input name="email" placeholder="Email"
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
                                        onChange={handleInputChange}
                                    />
                                </Form.Item>
                                <Button type="primary" block size="large" htmlType="submit"
                                    loading={loginState.apiState === "loading"}
                                >LOGIN</Button>
                                <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <br />
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
                                <Link to="/checkout/billing"  >
                                    <Button block size="large" style={{ marginTop: 16 }} >Checkout As Guest</Button>
                                </Link>

                            </Form>

                            <Divider plain>OR</Divider>
                            <Button block size="large" onClick={() => toggleSignupModal()} >Create an Account ||</Button>
                        </Left>
                        <Right>
                            <div style={{ marginTop: 8 }} >
                                <p style={{ fontSize: 14 }} >Thanks to your Piky account, you will be able to:</p>
                                <ul style={{ fontSize: 14 }} >
                                    <li>Access your shopping cart</li>
                                    <li>Save your billing and delivery information to order faster</li>
                                    <li>Manage your address book</li>
                                    <li>Access all your orders and download the related invoices</li>
                                    <li>Manage your newsletter subscription</li>
                                    <li>Update your personal data</li>
                                </ul>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", marginTop: 32, fontSize: 14 }} >
                                <h3 style={{ alignSelf: "center" }} >HERE TO HELP</h3>
                                <span>Have a question? You may find an answer in our FAQs.</span>
                                <span>But you can also contact us:</span>
                                <h3 style={{ marginTop: 12 }} >Customer Service</h3>
                                <span>Call 0000-000-000</span>
                                <span>Monday through Friday: 9am - 6pm ET</span>
                                <span>Saturday: 10am - 6pm ET</span>
                                <span>Send us an email</span>
                            </div>
                        </Right>
                    </div>
                </WrapperSm>
            </GlobleBox>
        </>
    )
}

const mapStateToProps = (state) => ({
    generalState: state.general,
    loginState: state.login,    
    createCustomerState: state.createCustomer,
})
const mapDispatchToProps = (dispatch) => ({
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    setUserLoggedIn: () => dispatch(setUserLoggedIn()),
    login: (params) => dispatch(login(params)),
    loginReset: () => dispatch(loginReset()),
    setCustomerData: (params) => dispatch(setCustomerData(params)),    
    createCustomer: (params) => dispatch(createCustomer(params)),
    createCustomerReset: () => dispatch(createCustomerReset()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
