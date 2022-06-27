import React, { useEffect } from "react"
import { Button } from "antd"
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

/* CUSTOM COMPONENT */
import { GlobleBox, WrapperSm } from "../../component/Xcomponent"

/* action */
import { getCartCountReset } from "../../action/getCartCountAction"
import { getCartReset } from "../../action/getCartAction"


const CheckoutThanks = props => {

    /* varibales */
    const {
        getCartCountReset,
        getCartReset
    } = props

    /* callback */
    useEffect(() => {
        getCartCountReset()
        getCartReset()
    }, [])


    /* function */



    return (
        <>
            <GlobleBox>
                <WrapperSm>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 8px', minHeight: 500, marginTop: 100 }} >
                        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 50 }} />
                        <h2>ORDER CONFIRMED</h2>
                        <Link to='/' >
                            <Button type='primary'>Explore Store More</Button>
                        </Link>
                    </div>
                </WrapperSm>
            </GlobleBox>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getCartCountReset: () => dispatch(getCartCountReset()),
    getCartReset: () => dispatch(getCartReset()),
})

export default connect(null, mapDispatchToProps)(CheckoutThanks)