import React from "react"
import { CheckCircleFilled, ArrowLeftOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"
import { Link } from "react-router-dom"

import { GlobleBox, WrapperSm } from "../../component/Xcomponent"
import CheckoutHeader from "../../component/CheckoutHeader/CheckoutHeader"
import { AddressCard, NextButton } from "./CheckoutAddressStyle"

const CheckoutAddress = props => {

    return (
        <>
            <CheckoutHeader />
            <GlobleBox>
                <WrapperSm>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "24px 0" }} >
                        <h2 style={{ marginTop: 0 }} >Select Billing Address</h2>
                        <Button type="primary">Add New Address</Button>
                    </div>
                    <div style={{ display: "flex", flexFlow: "wrap" }} >
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "24px 0" }} >
                        <h2 style={{ marginTop: 0 }} >Select Delivery Address</h2>
                        <Button type="primary">Add New Address</Button>
                    </div>
                    <div style={{ display: "flex", flexFlow: "wrap" }} >
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                        <AddressCard>
                            <div style={{ marginRight: 16, marginTop: 8 }} ><CheckCircleFilled style={{ fontSize: 24, color: "#e97a7e" }} /></div>
                            <div>
                                <p style={{ fontWeight: "bold", margin: 0 }} >Abhilash Lohar</p>
                                <p style={{ margin: 0 }}>Hiran magri, H N 333</p>
                                <p style={{ margin: 0 }}>Udaipur H Magri Udaipur, Rajasthan - 313906</p>
                                <p style={{ margin: 0 }}>Email - <span style={{ fontWeight: 600 }} >abhilash@gmailcom</span></p>
                                <p style={{ margin: 0 }}>Mobile - <span style={{ fontWeight: 600 }} >987653210</span></p>
                            </div>
                        </AddressCard>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", padding: "15px 4px 50px 4px" }} >
                        <Space>
                            <NextButton size="large" icon={<ArrowLeftOutlined />} >CONTINUE SHOPPING</NextButton>
                            <NextButton size="large" type="primary" >PAYMENT</NextButton>
                        </Space>
                    </div>
                </WrapperSm>
            </GlobleBox>
        </>
    )
}

export default CheckoutAddress