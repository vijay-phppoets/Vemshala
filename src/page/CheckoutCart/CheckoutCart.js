import React, { useEffect, useState } from "react"
import { Button, Row, Col, message, Divider } from "antd"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    PlusOutlined, MinusOutlined, CheckCircleFilled
} from "@ant-design/icons"

/* CUSTOM COMPONENT */
import Footer from "../../component/Footer/Footer"
import { GlobleBox, WrapperSm } from "../../component/Xcomponent"
import {
    CartItem, PaymentBtn, CouponBar, PlusMinusBtn,
    ActualPrice, RegularPrice, Discount
} from "./CheckoutCartStyle"


/* ACTIONS */
import { updateCart, updateCartReset } from "../../action/updateCartAction"
import { getCartCount, getCartCountReset } from "../../action/getCartCountAction"
import { getCart, getCartReset } from "../../action/getCartAction"
import { checkCoupon, checkCouponReset } from "../../action/checkCouponAction"
import { removeCoupon, removeCouponReset } from "../../action/removeCouponAction"

/* OTHERS */
import cnf from "../../config"
import { inr, getCartId, getCurrency } from "../../utils"

const CheckoutCart = props => {
    /* varibale & state */
    const {
        updateCart, updateCartReset, updateCartState,
        getCartCount, getCartCountReset, getCartCountState,
        getCart, getCartReset, getCartState,
        checkCoupon, checkCouponReset, checkCouponState,
        removeCoupon, removeCouponReset, removeCouponState
    } = props
    const [couponCode, setCouponCode] = useState("")

    /* CALLBACK */
    useEffect(() => {
        if (updateCartState.apiState === "success") {
            updateCartReset()
            getCartCount({
                cart_id: getCartId()
            })
            getCart({
                cart_id: getCartId(),
                currencyType: getCurrency()
            })
        }
        if (updateCartState.apiState === "error") {
            message.error("Something went wrong. Please try later");
            updateCartReset()
        }
    }, [updateCartState])

    useEffect(() => {
        if (checkCouponState.apiState === "success") {
            // code
            getCart({
                cart_id: getCartId(),
                currencyType: getCurrency()
            })
        }
        if (checkCouponState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [checkCouponState])

    useEffect(() => {
        if (removeCouponState.apiState === "success") {
            // code
            getCart({
                cart_id: getCartId(),
                currencyType: getCurrency()
            })
        }
        if (removeCouponState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
    }, [removeCouponState])

    /* FUNCTION */
    const handleAddToCart = (product_id, qty) => {
        updateCart({
            product_id: product_id,
            qty: qty,
            cart_id: getCartId()
        })
    }

    const handleCoupon = (cartValue) => {
        // alert(cartValue)
        checkCoupon({
            coupon_code: couponCode,
            cart_id: getCartId(),
            cartValue: cartValue,
            currencyType: getCurrency()
        })

    }
    const handleOnChange = (e) => {
        setCouponCode(e.target.value)
    }

    const handleRemoveCoupon = (cartId, couponCode) => {
        removeCoupon({
            coupon_code: couponCode,
            cart_id: cartId,
        })
    }



    return (
        <>
            <GlobleBox>
                <WrapperSm>
                    <div>
                        <div style={{ textAlign: "center", paddingTop: 16 }} >
                            <h1 style={{ fontSize: 24, fontWeight: "bold" }} >
                                CART
                                {getCartState.cart && getCartState.cart.items && getCartState.cart.items.length > 0 && ` (${getCartState.cart.items.length})`}
                            </h1>
                        </div>

                        <Row gutter="24">
                            <Col xs={24} sm={24} md={16} lg={16} xl={16}>

                                {getCartState.cart && getCartState.cart.items && getCartState.cart.items.length > 0 ?
                                    <>
                                        {getCartState.cart.items.map(item => (
                                            <CartItem>
                                                <div style={{ flex: 0.2, padding: "0px 4px" }} >
                                                    <img
                                                        src={`${cnf.s3_base_url}${item.p_thumbnail}`}
                                                        alt={item.p_thumbnail}
                                                        style={{ width: 80, heigth: 80 }}
                                                    />
                                                </div>
                                                <div style={{ flex: 0.8, padding: "0px 4px" }}>
                                                    <h3>{item.p_name}</h3>
                                                    {/* <p>Size: <span style={{ fontWeight: "600" }} >Small</span>, Color: <span style={{ fontWeight: "600" }} >Red</span> </p> */}
                                                    <div style={{
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }} >
                                                        <PlusMinusBtn type="text" icon={<MinusOutlined />}
                                                            onClick={() => handleAddToCart(item.product_id, -1)}
                                                        />
                                                        <div style={{ margin: "0 8px", fontWeight: "500" }} >{item.quantity}</div>
                                                        <PlusMinusBtn type="text" icon={<PlusOutlined />}
                                                            onClick={() => handleAddToCart(item.product_id, 1)}
                                                        />
                                                    </div>
                                                    <div style={{ marginTop: 8 }} >
                                                        
                                                        {item.p_is_sale_price === "yes" ?
                                                            <>
                                                                <ActualPrice> 
                                                                    {getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(item.p_actual_price)}
                                                                </ActualPrice>
                                                                <RegularPrice style={{textDecoration: "line-through"}}>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(item.p_regular_price)}</RegularPrice>
                                                                <Discount>{item.p_discount}% OFF</Discount>
                                                            </>:
                                                            <ActualPrice > 
                                                                {getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(item.p_actual_price)}
                                                            </ActualPrice>
                                                        }
                                                    </div>
                                                </div>
                                            </CartItem>
                                        ))}
                                    </>
                                    : <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding:"150px 80px" }} >No product added to the cart.</div>
                                }


                                {getCartState.apiState === "error" &&
                                    <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >No product added to the cart.</div>
                                }
                            </Col>
                          
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            {getCartCountState.count>0 && 
                                <div style={{ border: "solid 1px rgb(0,0,0,0.1)", padding: 16, borderRadius: 4, marginBottom: "8px", background: "white" }} >
                                    <div style={{ borderBottom: "solid 1px rgb(0,0,0,0.1)", marginBottom: 12 }} >
                                        <h3>Summary</h3>
                                    </div>
                                    <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.7)" }} >
                                        <span>SUBTOTAL</span>
                                        <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.subTotal ? getCartState.cart.subTotal : 0)}</span>
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.7)" }} >
                                        <span>DISCOUNT</span>
                                        <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.discount ? getCartState.cart.discount * -1 : 0)}</span>
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.9)", fontWeight: 800 }} >
                                        <span>TOTAL</span>
                                        <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.total ? getCartState.cart.total : 0)}</span>
                                    </p>
                                    <Divider />
                                    <h3>Apply Coupon</h3>
                                    {
                                        getCartState.cart && getCartState.cart.couponCode ?
                                            <>
                                                <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.9)", fontWeight: 500, paddingTop: "5px" }} >
                                                    <span>{getCartState.cart.couponCode}</span>
                                                    <Button type="primary" onClick={() => handleRemoveCoupon(getCartState.cart.id, getCartState.cart.couponCode)}>REMOVE</Button>
                                                </p>
                                            </>
                                            :
                                            <>

                                                <div style={{ marginBottom: 16 }} >
                                                    <CouponBar
                                                        placeholder="Enter Coupon"
                                                        enterButton={null}
                                                        size="middle"
                                                        onChange={handleOnChange}
                                                        suffix={<Button type="primary" onClick={() => handleCoupon(getCartState.cart.subTotal)} >APPLY</Button>}
                                                        style={{ width: "100%" }}
                                                    />
                                                </div>
                                            </>
                                    }

                                    <Link to="/checkout/login" >
                                        <PaymentBtn block type="primary" >CHECKOUT</PaymentBtn>
                                    </Link>
                                </div>
                            } 
                            </Col>
                        </Row>
                    </div>
                </WrapperSm>
            </GlobleBox>
           
        </>
    )
}

const mapStateToProps = (state) => ({
    getCartState: state.getCart,
    updateCartState: state.updateCart,
    getCartCountState: state.getCartCount,
    checkCouponState: state.checkCoupon,
    removeCouponState: state.removeCoupon,
})
const mapDispatchToProps = (dispatch) => ({
    updateCart: (params) => dispatch(updateCart(params)),
    updateCartReset: () => dispatch(updateCartReset()),
    getCartCount: (params) => dispatch(getCartCount(params)),
    getCartCountReset: () => dispatch(getCartCountReset()),
    getCart: (params) => dispatch(getCart(params)),
    getCartReset: () => dispatch(getCartReset()),
    checkCoupon: (params) => dispatch(checkCoupon(params)),
    checkCouponReset: () => dispatch(checkCouponReset()),
    removeCoupon: (params) => dispatch(removeCoupon(params)),
    removeCouponReset: () => dispatch(removeCouponReset()),

})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCart)
