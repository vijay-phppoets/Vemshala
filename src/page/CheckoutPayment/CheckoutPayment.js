import React, { useEffect, useState } from "react"
import { Button, Row, Col, Radio, Divider, message } from "antd"
import axios from "axios"

import { CheckCircleFilled, ArrowLeftOutlined, RightOutlined } from "@ant-design/icons"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"

/* CUSTOM COMPONENT */
import { GlobleBox, WrapperSm } from "../../component/Xcomponent"
import CheckoutStep from "../../component/CheckoutStep/CheckoutStep"
import { CartItem, PaymentBtn, ActualPrice, RegularPrice, Discount, CouponBar } from "./CheckoutPaymentStyle"


/* actions */
import { getCart, getCartReset } from "../../action/getCartAction"
import { placeCodOrder, placeCodOrderReset } from "../../action/placeCodOrderAction"
import { checkCoupon, checkCouponReset } from "../../action/checkCouponAction"

/* OTHERS */
import cnf from "../../config"
import { inr, getCartId, removeCartId, getCurrency,getCustomer } from "../../utils"


const CheckoutPayment = props => {

    // varibales 
    const {
        getCart, getCartReset, getCartState,
        placeCodOrder, placeCodOrderReset, placeCodOrderState,
        checkCoupon, checkCouponReset, checkCouponState
    } = props
    const [redirect, setRedirect] = useState([false, ''])
    const [paymentMode, setPaymentMode] = useState('online')
    const [couponCode, setCouponCode] = useState("")


    /* callback */
    useEffect(() => {
        getCart({
            cart_id: getCartId(),
            currencyType: getCurrency()
        })
            
    }, [])

    useEffect(() => {
        if (placeCodOrderState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
        if (placeCodOrderState.apiState === "success") {
            message.success(placeCodOrderState.message);
            removeCartId()
            setRedirect([true, '/checkout/thanks'])
        }
    }, [placeCodOrderState])

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

    /* function */
    const handleRadioChange = e => {
        setPaymentMode(e.target.value);
    };

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        } 
        
        // creating a new order
        const result = await axios({
            method: 'post',
            url: `${cnf.api.base_url}rzorder/create`,
            data: {
                cart_id: getCartId(),
                currencyType: getCurrency(), 
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data.order;
        const { b_fname, b_lname, b_email, b_phone } = result.data.billingInfo;
        const options = {
            key: "rzp_test_Wq2SaFiGfiKxCG",
            amount: amount.toString(),
            currency: currency,
            // currency: getCurrency(),
            name: "Piky",
            description: "Exclusive Saree",
            order_id: order_id,
            handler: async function (response) {
                removeCartId()
                setRedirect([true, '/checkout/thanks'])
            },
            prefill: {
                name: `${b_fname} ${b_lname}`,
                email: b_email,
                contact: b_phone,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    //Coupon
    const handleOnChange = (e) => {
        setCouponCode(e.target.value)
    }
    const handleCoupon = (cartValue) => {
        checkCoupon({
            coupon_code: couponCode,
            cart_id: getCartId(),
            cartValue: cartValue,
            currencyType: getCurrency()
        })

    }
    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />}
            <GlobleBox>
                <WrapperSm>
                    <CheckoutStep active={3} />
                    <h1>Payment</h1>
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
                                : <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >No product added to the cart.</div>
                            }


                            {getCartState.apiState === "error" &&
                                <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >No product added to the cart.</div>
                            }
                        </Col>


                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>

                            <div style={{ border: "solid 1px rgb(0,0,0,0.1)", padding: 16, borderRadius: 4, background: "white" }} >
                                <div style={{ borderBottom: "solid 1px rgb(0,0,0,0.1)", marginBottom: 12 }} >
                                    <h3>Summary</h3>
                                </div>
                                <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.7)" }} >
                                    <span>SUBTOTAL</span>
                                    <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.subTotal ? getCartState.cart.subTotal : 0)}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.7)" }} >
                                    <span>SHIPPING</span>
                                    <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.shipping ? getCartState.cart.shipping : 0)}</span>
                                </p>

                                <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.7)" }} >
                                    <span>DISCOUNT</span>
                                    <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.discount ? getCartState.cart.discount * -1 : 0)}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", color: "rgb(0,0,0,0.9)", fontWeight: 800 }} >
                                    <span>TOTAL</span>
                                    <span>{getCurrency() == "USD" ? <>$</> : <>₹</>}{inr(getCartState.cart && getCartState.cart.grandTotal ? getCartState.cart.grandTotal : 0)}</span>
                                </p>
                                <Divider />
                                <h3>Apply Coupon</h3>
                                <div style={{ marginBottom: 10 }} >
                                    <CouponBar
                                        placeholder="Enter Coupon"
                                        enterButton={null}
                                        size="middle"
                                        onChange={handleOnChange}
                                        suffix={<Button type="primary" onClick={() => handleCoupon(getCartState.cart.subTotal)} >APPLY</Button>}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <Divider />
                                <h3>Payment Method</h3>
                                <div style={{ marginBottom: 10 }} >
                                    <Radio.Group onChange={handleRadioChange} value={paymentMode}>
                                        <Radio value={'online'}>Online</Radio>
                                        <Radio value={'cod'}>Cash on delivery</Radio>
                                    </Radio.Group>
                                </div> 
                                <PaymentBtn block type="primary"
                                    onClick={() => {
                                        paymentMode === "online"
                                            ? displayRazorpay()
                                            : placeCodOrder({
                                                cart_id: getCartId(),
                                                currencyType: getCurrency(),
                                                customer:getCustomer()
                                                
                                            })
                                    }}
                                >{ paymentMode === "online" ? "PAYMENT" : "PLACE ORDER" }</PaymentBtn> 
                                <Link to={`/checkout/shipping`}  >
                                    <Button type="default" style={{ height: "40px", backgroundColor: "#eee", width:"100%", marginTop:"5px" }} ><ArrowLeftOutlined /> GO BACK</Button>
                                 </Link>
                            </div>
                        </Col>
                    </Row>
                </WrapperSm>
            </GlobleBox>
        </>
    )
}

const mapStateToProps = (state) => ({
    getCartState: state.getCart,
    placeCodOrderState: state.placeCodOrder,
    checkCouponState: state.checkCoupon,
})
const mapDispatchToProps = (dispatch) => ({
    getCart: (params) => dispatch(getCart(params)),
    getCartReset: () => dispatch(getCartReset()),
    placeCodOrder: (params) => dispatch(placeCodOrder(params)),
    placeCodOrderReset: () => dispatch(placeCodOrderReset()),
    checkCoupon: (params) => dispatch(checkCoupon(params)),
    checkCouponReset: () => dispatch(checkCouponReset()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPayment)