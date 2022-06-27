import React, { useEffect, useState } from 'react'
import { Row, Col, message, Space, Form, Input, Modal, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import _ from "lodash"


/* CUSTOM COMPONENTS */
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import { Container, AddressCard, Label, NewAddressCard, AddressValue,Xbadge } from "./ProfileStyle"
import ProfileMenu from '../../component/ProfileMenu/ProfileMenu';

/* ACTIONS */
import { getCustomerDetail, getCustomerDetailReset } from "../../action/getCustomerDetailAction"
import { getCustomerAddress, getCustomerAddressReset } from "../../action/getCustomerAddressAction"
import { addCustomerAddress, addCustomerAddressReset } from "../../action/addCustomerAddressAction"
import { deleteCustomerAddress, deleteCustomerAddressReset } from "../../action/deleteCustomerAddressAction"
import { getCountryList, getCountryListReset } from "../../action/getCountryListAction"
import { getStateList, getStateListReset } from "../../action/getStateListAction"

const Option = Select.Option

const Profile = props => {
    /* variable & state */
    const {
        getCustomerDetail, getCustomerDetailReset, getCustomerDetailState,
        getCustomerAddress, getCustomerAddresssReset, getCustomerAddressState,
        deleteCustomerAddress, deleteCustomerAddressReset, deleteCustomerAddressState,
        addCustomerAddress, addCustomerAddresssReset, addCustomerAddressState,
        getCountryList, getCountryListReset, getCountryListState,
        getStateList, getStateListReset, getStateListState,
    } = props

    const [showModal, setShowModal] = useState({
        visible: false,
        loading: false
    })

    const [countryIndia, setCountryIndia] = useState({})
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
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

    /* callbacks */
    useEffect(() => {
        getCountryList({})
        getCustomerDetail({})
        getCustomerAddress({})
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
        if (addCustomerAddressState.apiState === "success") {
            message.success(addCustomerAddressState.message);
            addCustomerAddressReset()
            setShowModal({ ...showModal, ['visible']: false })
            setFormData({})
            getCustomerAddress({})
            addCustomerAddressReset({})
            form.resetFields()
        }
        else if (addCustomerAddressState.apiState === "error") {
            message.error("Something went wrong. Please try later");
            addCustomerAddressReset({})
        }
    }, [addCustomerAddressState])

    useEffect(() => {
        if (deleteCustomerAddressState.apiState === "success") {
            message.success(deleteCustomerAddressState.message);
            deleteCustomerAddressReset()
            setShowModal({ ...showModal, ['visible']: false })
            getCustomerAddress({})
        }
        else if (deleteCustomerAddressState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [deleteCustomerAddressState])

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
        addCustomerAddress({
            "company_name":formData['company_name'],
            "country":formData['country'],
            "phone":formData['phone'],
            ...formData
        })})
        form.resetFields();
        
    }

    const handleOnDelete = (id) => {
        deleteCustomerAddress({
            address_id: id
        })  
    }

    const handleCancel = () => {
        setShowModal({ ...showModal, ['visible']: false })
        form.resetFields()
    }

    return (
        <GlobleBox>
            <Wrapper>
                <Row gutter='12' >
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: 16 }} >
                        <ProfileMenu />
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{ display: 'flex', justifyContent: 'center' }} >
                        <Container>
                            <h3>{getCustomerDetailState.customer.name}</h3>
                            <p>{getCustomerDetailState.customer.email}</p>
                            { getCustomerAddressState.apiState == "success" && getCustomerAddressState.customer_address.length>0 ? <h3 style={{color:"gray"}}>Your Saved Addresses</h3> : <h3 style={{color:"gray"}}>Please Add an Address</h3> }
                            <div style={{ background: "white", marginBottom: 40, padding: 16 }} >
                                <Space size="large" style={{ display: "flex", flexFlow: "wrap" , justifyContent: "center", alignItems: "center" }}>
                                    {getCustomerAddressState.apiState == "success" && getCustomerAddressState.customer_address.length>0 &&
                                        <>
                                            {getCustomerAddressState.customer_address.map(address =>{
                                            return (
                                                <AddressCard active={false}>  
                                                <Xbadge >
                                                <DeleteOutlined style={{ color: '#bcbcbc' }}  
                                                onClick={()=>handleOnDelete(address.id)}/>
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
                                                {/* <AddressValue>{address.email}</AddressValue> */}
                                        </AddressCard>)
                                            })} 
                                        </>
                                        }
                                        
                                        <NewAddressCard onClick={()=>setShowModal({...showModal,['visible']:true})}>
                                            <Label>Add New Address</Label><br />
                                        </NewAddressCard>
                                </Space>
                            </div>
                        </Container>
                        <Modal
                            visible={showModal.visible}
                            title="Add Address"
                            onCancel={handleCancel}
                            onOk={handleOnSubmit}
                            okText={"Add Address"}
                            cancelText={"Cancel"}
                        > 
                             <Form  form={form} layout="vertical">
                            <Row gutter="24">
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                    
                                        name="first_name"
                                        label="First Name"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="first_name" placeholder="Enter First Name"
                                            onChange={handleOnChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Form.Item
                                    style={{ marginBottom: "6px" }}
                                   
                                        name="last_name"
                                        label="Last Name"
                                        rules={[{ required: true, message: 'Required' }]}
                                    >
                                        <Input name="last_name" placeholder="Enter Last Name"
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
                                
                            </Row>
                        </Form>
                        </Modal>
                    </Col>
                </Row>
            </Wrapper>
        </GlobleBox>
    )
}

const mapStateToProps = (state) => ({
    getCustomerDetailState: state.getCustomerDetail,
    getCountryListState: state.getCountryList,
    getStateListState: state.getStateList,
    getCustomerAddressState: state.getCustomerAddress,
    addCustomerAddressState: state.addCustomerAddress,
    deleteCustomerAddressState: state.deleteCustomerAddress,
})
const mapDispatchToProps = (dispatch) => ({
    getCustomerDetail: (params) => dispatch(getCustomerDetail(params)),
    getCustomerDetailReset: () => dispatch(getCustomerDetailReset()),
    getCountryList: (params) => dispatch(getCountryList(params)),
    getCountryListReset: () => dispatch(getCountryListReset()),
    getStateList: (params) => dispatch(getStateList(params)),
    getStateListReset: () => dispatch(getStateListReset()),
    getCustomerAddress: (params) => dispatch(getCustomerAddress(params)),
    getCustomerAddressReset: () => dispatch(getCustomerAddressReset()),    
    addCustomerAddress: (params) => dispatch(addCustomerAddress(params)),
    addCustomerAddressReset: () => dispatch(addCustomerAddressReset()),
    deleteCustomerAddress: (params) => dispatch(deleteCustomerAddress(params)),
    deleteCustomerAddressReset: () => dispatch(deleteCustomerAddressReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
