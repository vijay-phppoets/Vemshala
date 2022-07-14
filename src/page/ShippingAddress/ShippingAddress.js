import React, { useState, useEffect } from "react"
import { Button, Space, Form, Input, Row, Col, Select, message, Modal, Checkbox } from "antd"
import { CheckCircleFilled, ArrowLeftOutlined, RightOutlined , CheckCircleOutlined } from "@ant-design/icons"
import { Link, Redirect, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import _ from "lodash"
/* CUSTOM COMPONENT */
import { GlobleBox, WrapperSm } from "../../component/Xcomponent"
import CheckoutHeader from "../../component/CheckoutHeader/CheckoutHeader"
import { NextButton , AddressCard, Label, Xbadge, AddressValue, AddressButtonDiv ,NewAddressCard,FlexDiv } from "./ShippingAddressStyle"
import CheckoutStep from "../../component/CheckoutStep/CheckoutStep"

// Actions
import { getCountryList, getCountryListReset } from "../../action/getCountryListAction"
import { getStateList, getStateListReset } from "../../action/getStateListAction"
import { saveCartAddress, saveCartAddressReset } from "../../action/saveCartAddressAction"
import { getCustomerAddress, getCustomerAddressReset } from "../../action/getCustomerAddressAction"
import { addCustomerAddress, addCustomerAddressReset } from "../../action/addCustomerAddressAction"


/* others */
import { getCartId, getToken } from "../../utils"

const Option = Select.Option

const ShippingAddress = props => {
    //Variables
    const {
        getCountryList, getCountryListReset, getCountryListState,
        getStateList, getStateListReset, getStateListState,
        saveCartAddress, saveCartAddressReset, saveCartAddressState,
        getCustomerAddress, getCustomerAddresssReset, getCustomerAddressState,
        addCustomerAddress, addCustomerAddresssReset, addCustomerAddressState,
    } = props

    const [isSelectedAdd, setIsSelectedAdd] = useState('')
    const [sameAsBilling, setSameAsBilling] = useState(false)

    const [formData, setFormData] = useState({
        type: "shipping",
        fname: "",
        lname: "",
        company_name: "",
        country: "",
        country_id: "",
        state: "",
        city: "",
        street: "",
        landmark: "",
        phone: "",
        email: "",
    })
    const [form] = Form.useForm();

    const [redirect, setRedirect] = useState(false)
    const [showModal, setShowModal] = useState({
        visible: false,
        loading: false
    })

    const [countryIndia, setCountryIndia] = useState({})


    let history = useHistory()
    // Callback
    useEffect(() => {
        getCountryList()
        if (!getToken()){
            setShowModal({ ...showModal, ['visible']: true })
        }
        else{
            getCustomerAddress({})
        }
    }, [])

    useEffect(() => {
        if (getCountryListState.apiState === "success"){
            let country = _.find(getCountryListState.list, function(country) {
                if (country.name === "India") {
                    return true;
                }
            })
            setCountryIndia(country)
        }
    }, [getCountryListState])

    useEffect(() => {
        getStateList({
            country_id: formData.country_id
        })
    }, [formData.country_id])

    useEffect(() => {
        if (saveCartAddressState.apiState === "success") {
            message.success(saveCartAddressState.message);
            saveCartAddressReset()
            setRedirect(true)
            form.resetFields()
        }
        else if (saveCartAddressState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [saveCartAddressState])

    useEffect(() => {
        if (addCustomerAddressState.apiState === "success") {
            message.success(addCustomerAddressState.message);
            addCustomerAddressReset()
            setShowModal({ ...showModal, ['visible']: false })
            getCustomerAddress({})
            setIsSelectedAdd('')
            form.resetFields()
        }
        else if (addCustomerAddressState.apiState === "error") {
            message.error("Something went wrong. Please try later");
            addCustomerAddressReset()
        }
    }, [addCustomerAddressState])

    //Function
    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (name, value, node) => {
        if (name === 'country') {
            setFormData({ ...formData, [name]: node.children, ['country_id']: value })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleOnSubmit = () => {
        form.validateFields().then (()=>{
        if (!getToken()){
            saveCartAddress({
                cart_id: getCartId(),
                ...formData
            })
        }
        else{
            addCustomerAddress({
                "first_name":formData['fname'],
                "last_name":formData['lname'],
                "company_name":formData['company_name'],
                "country":formData['country'],
                "phone":formData['phone'],
                ...formData
            })
        }})
    }

    const handleCancel = () => {
        setShowModal({ ...showModal, ['visible']: false })
        form.resetFields()
    }

    
    const setShippingAddress = () => {
        var add = isSelectedAdd
        if (add === '' && sameAsBilling === false){
            message.error("Please Select Shipping Address");
        }
        else if(sameAsBilling === true){
            saveCartAddress({
                cart_id: getCartId(),
                "same_as_billing": sameAsBilling,
                ...formData
            })
        }
        else{
            saveCartAddress({
                cart_id: getCartId(),
                "fname":add.first_name,
                "lname":add.last_name,
                "company_name":add.company_name,
                "phone":add.phone,
                "email":add.email,
                "country":add.country,
                "state":add.state,
                "city":add.city,
                "street":add.street,
                "landmark":add.landmark,
                "zip_code":add.zip_code,
                "type":"shipping"
            })
        }
    }

    return (
        <>
            {redirect &&
                <Redirect to="/checkout/payment" />
            }
            <GlobleBox>
                <WrapperSm>
                    <CheckoutStep active={2} />
                    <h1>Shipping Address</h1>
                    { getCustomerAddressState.apiState == "success" && getCustomerAddressState.customer_address.length>0 ? <h3 style={{color:"gray"}}>Please Select Any one of the saved addresses</h3> : <h3 style={{color:"gray"}}>Please Add a Address to continue</h3> }

                    <div style={{ background: "white", marginBottom: 40, padding: 16 }} >
                    <Space size="large" style={{ display: "flex", flexFlow: "wrap" , justifyContent: "center", alignItems: "center" }}>
                    {getCustomerAddressState.apiState == "success" && getCustomerAddressState.customer_address.length>0 &&
                        <>
                            {getCustomerAddressState.customer_address.map(address =>{
                                return (<AddressCard 
                                onClick={()=>{setIsSelectedAdd(address)}}
                                active={ isSelectedAdd.id === address.id ? true : false}>  
                                    <Xbadge count={ isSelectedAdd.id == address.id ? <CheckCircleOutlined style={{ color: '#52c41a' }} /> : ""}>
                                    </Xbadge>
                                    <Label>{address.first_name} {address.last_name}</Label><br />
                                    <AddressValue >{address.street} </AddressValue> <br/>
                                    {address.landmark != "" && (
                                                <>
                                                    <AddressValue>Landmark: {address.landmark} </AddressValue><br />
                                                </>
                                            )}
                                    <AddressValue style={{ textTransform: "uppercase" }} >{address.city},{address.state}  </AddressValue><br/>
                                    <AddressValue style={{ textTransform: "uppercase" }} >  {address.country} , {address.zip_code}</AddressValue><br />
                                    <AddressValue>{address.phone}</AddressValue><br />
                                    <AddressValue>{address.email}</AddressValue>
                            </AddressCard>)
                                })} 
                            </>
                            }
                            
                            <NewAddressCard onClick={()=>setShowModal({...showModal,['visible']:true})}>
                                <Label>Add New Address</Label><br />
                            </NewAddressCard>
                        </Space>
                        <Checkbox style={{"margin":10}} 
                        checked={sameAsBilling}
                        onChange={()=>{
                            setSameAsBilling(true)
                            setIsSelectedAdd('')
                        }}
                        >
                            Same as Billing Address
                        </Checkbox>
                        <div style={{ display: "flex", justifyContent: "center" ,  padding: "15px"}} >
                                <Link to={`/checkout/billing`}  >
                                    <Button type="default" style={{ height: "40px", backgroundColor: "#eee" }} ><ArrowLeftOutlined /> GO BACK</Button>
                                 </Link>
                                
                                &nbsp;
                                <NextButton type="primary" htmlType="submit" 
                                  onClick={()=>{setShippingAddress()}}
                                >NEXT<RightOutlined /></NextButton>
                        </div>

                        
                    </div>
                </WrapperSm>
            </GlobleBox>
            {/* modal */}

            <Modal
                visible={showModal.visible}
                title="Add Shipping Address"
                onCancel={handleCancel}
                onOk={handleOnSubmit}
                okText={"Add Address"}
                cancelText={"Cancel"}
            > 
                    <Form form={form} layout="vertical">
                            <Row gutter="24">
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                    
                                        name="fname"
                                        label="First Name"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="fname" placeholder="Enter First Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                   
                                        name="lname"
                                        label="Last Name"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="lname" placeholder="Enter Last Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="company_name"
                                        label="Company Name"
                                    >
                                        <Input name="company_name" placeholder="Enter Company Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="country"
                                        label="Country"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Select
                                            name="country"
                                            placeholder="Select Country"
                                            showSearch 
                                            allowClear
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                            onChange={(v, node) => handleSelectChange("country", v, node)}
                                        >
                                            <Option key={countryIndia.id} value={countryIndia.id}>{countryIndia.name}</Option>
                                            {getCountryListState.list.map(country => (
                                                <Option key={country.id} value={country.id}>{country.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="state"
                                        label="State"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Select
                                            name="state"
                                            placeholder="Select State"
                                            showSearch
                                            allowClear
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                            onChange={(v) => handleSelectChange("state", v)}
                                        >
                                            {getStateListState.list.map(state => (
                                                <Option key={state.name} value={state.name}>{state.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="city"
                                        label="City"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="city" placeholder="Enter City"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="zip-code"
                                        label="PIN/ZIP Code"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="zip_code" placeholder="Enter PIN/ZIP CODE"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="street"
                                        label="Address"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="street" placeholder="Enter Plot/Flat no , Street Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="landmark"
                                        label="Landmark"
                                    >
                                        <Input name="landmark" placeholder="Enter Apartment, suite, unit, etc."
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                        name="phone"
                                        label="Phone"
                                        maxLength={15}
                                        rules={[
                                            { required: true, message: 'Maximum 15 digits allowed',
                                            pattern: /^[+\da-zA-Z]{0,15}$/, },
                                            {required: true, message: 'Required',}
                                        ]}
                                    >
                                        <Input name="phone" placeholder="Enter Phone"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item maxLength={15} name="email" label="Email" style={{ marginBottom: "6px" }} rules={[{ required: true, message: 'Please enter email address' },{ type: 'email', message: 'Please enter valid email address',}]}>
                                        <Input name="email" placeholder="Enter Email Address" onChange={handleOnChange} />
                                    </Form.Item>
                                </Col>
                                
                            </Row>
                        </Form>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    saveCartAddressState: state.saveCartAddress,
    getCountryListState: state.getCountryList,
    getStateListState: state.getStateList,
    getCustomerAddressState: state.getCustomerAddress,
    addCustomerAddressState: state.addCustomerAddress,
})

const mapDispatchToProps = (dispatch) => ({
    saveCartAddress: (params) => dispatch(saveCartAddress(params)),
    saveCartAddressReset: () => dispatch(saveCartAddressReset()),
    getCountryList: (params) => dispatch(getCountryList(params)),
    getCountryListReset: () => dispatch(getCountryListReset()),
    getStateList: (params) => dispatch(getStateList(params)),
    getStateListReset: () => dispatch(getStateListReset()),
    getCustomerAddress: (params) => dispatch(getCustomerAddress(params)),
    getCustomerAddressReset: () => dispatch(getCustomerAddressReset()),    
    addCustomerAddress: (params) => dispatch(addCustomerAddress(params)),
    addCustomerAddressReset: () => dispatch(addCustomerAddressReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress)