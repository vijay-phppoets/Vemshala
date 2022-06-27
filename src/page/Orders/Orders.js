import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Tag, Button } from 'antd';
import { connect } from "react-redux"
import moment from 'moment'
import { Link } from 'react-router-dom' 
/* CUSTOM COMPONENTS */
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import { Container } from "./OrdersStyle"
import ProfileMenu from '../../component/ProfileMenu/ProfileMenu';
import {  DownloadOutlined, CopyOutlined} from "@ant-design/icons"
/* ACTIONS */
import { getOrderList, getOrderListReset } from "../../action/getOrderListAction"
// import { getInvoice, getInvoiceReset } from "../../action/getInvoiceAction"

/* Others */
import { pad, inr,getCustomer } from "../../utils"

const Orders = props => {
    /* variable & state */
    const {
        getOrderList, getOrderListReset, getOrderListState,
        // getInvoice, getInvoiceReset, getInvoiceState,
    } = props
    const columns = [
        {
            title: 'Order Date',
            dataIndex: 'order_date',
            key: 'order_date',
            render: order_date => <span style={{ whiteSpace: "nowrap" }} >{order_date}</span>
        },
        {
            title: 'Order Number',
            dataIndex: 'order_number',
            key: 'order_number',
            render: obj => <Link to={`/order/${obj.id}`} >{obj.order_number}</Link>
        },
        {
            title: 'Payment Mode',
            dataIndex: 'payment_mode',
            key: 'payment_mode',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => (<Tag color="#87d068">{status.toUpperCase()}</Tag>)
        },
        {
            title: 'Action',
            dataIndex: 'datas',
            key: 'action',
            render: (obj) => (
                <> 
                    <Link to={`/order/${obj.id}`}><Button size="small" icon={<CopyOutlined />} />View</Link>
                    &nbsp;
                    { obj.status == "delivered"?
                    ( <Link to={`/invoice/${obj.id}`}><Button size="small" icon={<DownloadOutlined />} /> Invoice</Link>) 
                    :"" }
                </>
            )
        }
    ];
    const [dataSource, setDataSource] = useState([])

    /* callbacks */
    useEffect(() => {
        getOrderList()
    }, [])

    useEffect(() => {
        if (getOrderListState.apiState === 'success' &&  getOrderListState.list.length > 0 ) {
            let tableData = []
            getOrderListState.list.map(row => {
                tableData.push({
                    order_date: row.order_date? moment(row.order_date, 'YYYY-MM-DD').format('DD-MMM-YYYY'): "NOT PLACED",
                    order_number: { order_number: row.order_no? pad(row.order_no, 6): "000000", id: row.id },
                    payment_mode: row.payment_mode? row.payment_mode.toUpperCase(): row.payment_mode,
                    total: `₹${inr(row.total)}`,
                    status: row.status, 
                    datas: { "id": row.id, "status": row.status, },
                })
            })
            setDataSource(tableData)
        }
    }, [getOrderListState])

    // const handleDownload = (id) =>{
    //     getInvoice({
    //         card_id:id,
    //         customer_id:getCustomer().id
    //     });
    // }
    // useEffect(() => {
         
    //     if (getInvoiceState.apiState === 'success') {
            
    //     }
    // }, [getInvoiceState])
    return (
        <GlobleBox>
            <Wrapper>
                <Row gutter='12' >
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: 16 }} >
                        <ProfileMenu />
                    </Col>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{ display: 'flex', justifyContent: 'center' }} >
                        <Container>
                            <h3>Orders</h3>
                            <Table dataSource={dataSource} columns={columns}
                                pagination={false} scroll={{ x: 500 }}
                            />
                        </Container>
                    </Col>
                </Row>
            </Wrapper>
        </GlobleBox>
    )
}

const mapStateToProps = (state) => ({
    getOrderListState: state.getOrderList,
    // getInvoiceState: state.getInvoice, 
})
const mapDispatchToProps = (dispatch) => ({
    getOrderList: (params) => dispatch(getOrderList(params)),
    getOrderListReset: () => dispatch(getOrderListReset()), 
    // getInvoice: (params) => dispatch(getInvoice(params)),
    // getInvoiceReset: () => dispatch(getInvoiceReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
