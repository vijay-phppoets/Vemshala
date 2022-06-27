import React, { useState } from "react"
import { connect } from "react-redux"
import { HeartOutlined, HeartFilled, ShoppingCartOutlined
} from "@ant-design/icons"
import { message } from "antd"

/* custom components */
import { Container, Description } from "./ProductStyle"
import {CartButton, WishlistButton} from "../../page/ProductDetail/ProductDetailStyle"

/* others */
import cnf from "../../config"
import { getCartId, getToken } from "../../utils"

// Actions
import { updateCart, updateCartReset } from "../../action/updateCartAction"
import { saveWishlistDetail } from "../../action/saveWishlistAction"

// components
import AccountDrawer from "../../component/AccountDrawer/AccountDrawer";

const Product = props => {
    // variables
    const { product, currencyType,
        updateCart, updateCartReset, updateCartState,
        
        saveWishlistDetail, saveWishlistState,
     } = props

    const [accountVisible, setAccountVisible] = useState(false)

    const handleAddToCart = (product_id, qty) => {
        updateCart({
            product_id: product_id,
            qty: qty,
            cart_id: getCartId()
        })
    }

    
    const handleWishlistAdd = (productId) => {
        if (product?.is_wishlisted) {
            message.warning("The product already wishlisted");
        } else {
            if (!getToken()) {
                setAccountVisible(true);
                return
            }
            saveWishlistDetail({
                product_id: productId
            })
        }

    }


    return (
        <Container >
            <div style={{ position: "relative", background: "#fff", border: "solid 1px #cccccca8" }} >
                <a href={`/p/${product?.url_key}`} target="_blank">
                    <div>
                        <img src={`${product ? cnf.s3_base_url : ""}${product && product.thumbnail || "/saree1.jpeg"}`} alt="" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <Description>
                        <div style={{ fontSize: 16, color: "#000", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} >{product && product.name || "product name"}</div>
                        <div style={{ fontWeight: "bold", color: "#000",  fontSize: 16, textAlign:"center" }} >
                            {currencyType == "USD" ? <>$</> : <>₹</>}
                            {product?.actual_price}
                        {product?.is_sale_price === "yes" &&
                            <span style={{ fontWeight: "normal", color: "#00000099", fontSize: 14, textAlign:"center" , textDecoration: "line-through", marginLeft: 4 }} >
                                {currencyType == "USD" ? <>$</> : <>₹</>}
                                {product.regular_price}</span>
                        }
                        </div>
                    </Description>
                    {product?.is_sale_price === "yes" &&
                        <div style={{ position: "absolute", top: 10, left: 10 }} >
                            <div style={{ background: "green", color: "#fff", padding: "0px 5px", borderRadius: 3 }} >{product.discount}% OFF</div>
                        </div>
                    }
                    </a>
                    <div style={{"display":"flex", "flexDirection":"row"}}>
                        {product?.stock===0 ?
                            <CartButton
                                icon={<ShoppingCartOutlined />} 
                                disabled
                            >OUT OF STOCK</CartButton>
                            : <CartButton 
                                icon={<ShoppingCartOutlined />}
                                onClick={() => handleAddToCart(product?.id, 1)}
                                loading={updateCartState.apiState === "loading"}
                            >ADD TO CART</CartButton>
                        }
                        {
                            props.forWishlist ? <></> : <WishlistButton style={{height:"auto"}} type="default" size="large" icon={(product?.is_wishlisted || (saveWishlistState.apiState === 'success' && saveWishlistState.product_id === product?.id))
                            ? <HeartFilled />
                            : <HeartOutlined />}
                            onClick={() => handleWishlistAdd(product?.id)}
                        ></WishlistButton>
                        }
                        
                    </div>
                       
                </div>
          
            {/* Currently this function not build  so its commented */}
            {/* <div className="action-btns" >
                <div style={{ width: "20%" }} >
                    <CartBtn icon={<HeartOutlined style={{ fontSize: 20, color: "red" }} />}
                    />
                </div>
                <div style={{ width: "80%" }} >
                    <CartBtn type="primary" onClick={() => console.log("hi")} >ADD TO CART</CartBtn>
                </div>
            </div> */}

            {/* {
                isWishlist === true &&
                <div style={{ width: "100%" }} >
                    <CartBtn type="primary" onClick={() => handleRemove(product.wishlist_id)} >Remove</CartBtn>
                </div>
            } */}
            <AccountDrawer
                accountVisible={accountVisible}
                onClose={() => setAccountVisible(false)}
            />
        </Container>
    )
}
// export default Product

const mapStateToProps = (state) => ({
    updateCartState: state.updateCart,
    saveWishlistState: state.saveWishlist,
})
const mapDispatchToProps = (dispatch) => ({
    updateCart: (params) => dispatch(updateCart(params)),
    updateCartReset: () => dispatch(updateCartReset()),
    saveWishlistDetail: (params) => dispatch(saveWishlistDetail(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)