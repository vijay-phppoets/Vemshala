import React, { useState, useEffect } from 'react'
import { Row, Col, Table, Tag } from 'antd';
import { connect } from "react-redux"
import moment from 'moment'

/* CUSTOM COMPONENTS */
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import { Container } from "./OrderDetailStyle"
import ProfileMenu from '../../component/ProfileMenu/ProfileMenu';

/* ACTIONS */
import { getOrderDetail, getOrderDetailReset } from "../../action/getOrderDetailAction"

/* Others */
import { pad, inr, dtFormat } from "../../utils"
import cnf from "../../config"

const OrderDetail = props => {
    /* variable & state */
    const order_id = props.match.params.id
    const { getOrderDetail, getOrderDetailReset, getOrderDetailState } = props

    /* callbacks */
    useEffect(() => {
        getOrderDetail({
            order_id: order_id
        })
    }, [])

    return (
        <GlobleBox>
            <Wrapper>
                {getOrderDetailState.apiState === 'success' &&
                    <Row gutter='12' >
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: 16 }} >
                            <ProfileMenu />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{ display: 'flex', justifyContent: 'center' }} >
                            <Container>
                                <h3>Order Number: {pad(getOrderDetailState.order.order_no, 6, 0)}</h3>
                                <Row gutter='12' >
                                    <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                        <span>Date: </span>
                                        <span>{dtFormat(getOrderDetailState.order.order_date)}</span>
                                    </Col>
                                </Row>
                                <table className='tbl'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getOrderDetailState.order.items.map(item => (
                                            <tr>
                                                <td>
                                                    <img src={`${cnf.s3_base_url}${item.thumbnail}`}
                                                        alt={`${cnf.s3_base_url}${item.thumbnail}`}
                                                        style={{ width: "40px", height: "auto", marginRight: 8 }} />
                                                    {item.product_name}
                                                </td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price}</td>
                                                <td>{item.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan='3' style={{ textAlign: 'right' }} >SUB TOTAL</th>
                                            <th>₹{inr(getOrderDetailState.order.sub_total)}</th>
                                        </tr>
                                        <tr>
                                            <th colSpan='3' style={{ textAlign: 'right' }}>GRAND TOTAL</th>
                                            <th>₹{inr(getOrderDetailState.order.grand_total)}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </Container>
                        </Col>
                    </Row>
                }
            </Wrapper>
        </GlobleBox>
    )
}

const mapStateToProps = (state) => ({
    getOrderDetailState: state.getOrderDetail,
})
const mapDispatchToProps = (dispatch) => ({
    getOrderDetail: (params) => dispatch(getOrderDetail(params)),
    getOrderDetailReset: () => dispatch(getOrderDetailReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)

