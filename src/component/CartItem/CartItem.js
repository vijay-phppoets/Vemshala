import React, { useEffect } from "react"
import { message } from "antd"
import {
    PlusOutlined, MinusOutlined
} from "@ant-design/icons"
import { connect } from "react-redux"

/* CUSTOM COMPONENT */
import { PlusMinusBtn } from "./CartItemStyle"

/* OTHERS */
import cnf from "../../config"
import { inr, getCartId } from "../../utils"

/* ACTIONS */
import { updateCart, updateCartReset } from "../../action/updateCartAction"

const CartItem = props => {
    /* VARIABLES */
    const {
        updateCart, updateCartReset, updateCartState, currencyType
    } = props

    /* CALLBACK */
    useEffect(() => {
        if (updateCartState.apiState === "success") {
            updateCartReset()
        }
        if (updateCartState.apiState === "error") {
            message.error("Something went wrong. Please try later");
            updateCartReset()
        }
    }, [updateCartState])

    /* FUNCTION */
    const handleAddToCart = (product_id, qty) => {
        updateCart({
            product_id: product_id,
            qty: qty,
            cart_id: getCartId(),
            currencyType: currencyType
        })
    }




    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }} >
            <div style={{ height: 70, width: 70, overflow: "hidden" }} >
                <img
                    src={`${cnf.s3_base_url}${props.item.p_thumbnail}`}
                    alt={props.item.p_thumbnail}
                    style={{
                        width: 70,
                        height: "auto"
                    }} />
            </div>
            <div style={{ marginLeft: 8, flex: 1 }} >
                <p>{props.item.p_name}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }} >
                        <PlusMinusBtn type="text" icon={<MinusOutlined />}
                            onClick={() => handleAddToCart(props.item.product_id, -1)}
                        />
                        <div style={{ margin: "0 8px", fontWeight: "500" }} >{props.item.quantity}</div>
                        <PlusMinusBtn type="text" icon={<PlusOutlined />}
                            onClick={() => handleAddToCart(props.item.product_id, 1)}
                        />
                    </div>
                    <div style={{
                        fontWeight: "500"
                    }} >
                        {currencyType == "USD" ? <>$</> : <>₹</>}
                        {inr(props.item.p_actual_price)}</div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    updateCartState: state.updateCart,
})
const mapDispatchToProps = (dispatch) => ({
    updateCart: (params) => dispatch(updateCart(params)),
    updateCartReset: () => dispatch(updateCartReset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)