import React, { useEffect, useState } from "react"
import { Button, Space, Form, Input, Row, Col, Select, message, } from "antd"
import { connect } from "react-redux"
// custom component
import Footer from "../../component/Footer/Footer"
import TextArea from "antd/lib/input/TextArea"
import { MainLeftBox, MainRightBox } from "./ContactUsStyle"
// action   
import { saveContact, saveContactReset } from "../../action/saveContactAction"

const ContactUs = props => {
    // variables & states
    const {
        saveContact, saveContactReset, saveContactState
    } = props
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [redirect, setRedirect] = useState(false)

    // functions 

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = () => {
        saveContact({
            ...formData
        })
    }

    useEffect(() => {
        if (saveContactState.apiState === "success") {
            message.success(saveContactState.message);
            saveContactReset()
            setRedirect(true)
        }
        else if (saveContactState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [saveContactState])

    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >CONTACT US</h1>
                </div>


                <MainLeftBox>
                    <div style={{ width: "100%", marginLeft: "20%", paddingTop: "20px" }}>
                        <h3 style={{ fontSize: 24, fontWeight: "bold", textAlign: "left", }}> Office:</h3>
                        <p style={{ textAlign: "left", fontSize: 15, }}>H5 – 8 -SF, VATIKA INXT</p>
                        <p style={{ textAlign: "left", fontSize: 15, }}>SECTOR 82</p>
                        <p style={{ textAlign: "left", fontSize: 15, }}>Gurugram, Haryana</p>
                        <p style={{ textAlign: "left", fontSize: 15, }}>India – 122012</p>

                        <br></br>

                        <h3 style={{ fontSize: 24, fontWeight: "bold", textAlign: "left", }}> Get in Touch</h3>
                        <p style={{ textAlign: "left", fontSize: 15, }}>Should you have any pre-sales</p>
                        <p style={{ textAlign: "left", fontSize: 15, }}>queries, feel free to write to us:</p>
                        <p style={{ textAlign: "left", fontSize: 15, }}><a href="mailto:support@vemshala.com">support@vemshala.com</a></p>
                    </div>
                </MainLeftBox>
                <MainRightBox>
                    <div style={{ background: "white", marginBottom: 40, padding: 16 }} >
                        <Form onFinish={handleOnSubmit} layout="vertical">
                            <Row gutter="24">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="name" placeholder="Enter Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter="24">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[{ required: true, message: 'Required' }, { type: 'email', message: 'Email is not valid' },]}
                                    >
                                        <Input name="email" placeholder="Enter Email"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter="24">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="message"
                                        label="Message"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <TextArea rows={4} name="message" placeholder="Enter Message"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div style={{ display: "flex", justifyContent: "left" }} >
                                <Button type="primary" loading={saveContactState.apiState === "loading"} htmlType="submit" >Submit</Button>
                            </div>
                        </Form>
                    </div>
                </MainRightBox>
            </div>
           
        </>
    )
}

const mapStateToProps = (state) => ({
    saveContactState: state.saveContact,
})
const mapDispatchToProps = (dispatch) => ({
    saveContact: (params) => dispatch(saveContact(params)),
    saveContactReset: () => dispatch(saveContactReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)
