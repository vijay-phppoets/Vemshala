import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { message, Row, Col } from "antd"
import { HeartOutlined } from "@ant-design/icons"
// custom component
import Footer from "../../component/Footer/Footer"
import Product from "../../component/Product/Product"
import { ProductsWrapper, ProductsBox, CartBtn, Container } from "./WishlistStyle"
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import ProfileMenu from '../../component/ProfileMenu/ProfileMenu';
// action
import { getWishlist } from "../../action/getWishlistAction"
import { wishlistRemove } from "../../action/wishlistRemoveAction"
import { getCurrency } from '../../utils'
const Wishlist = props => {
    // variables & states
    const {
        getWishlist, getWishlistState,
        wishlistRemove, wishlistRemoveState
    } = props
    const [refresh, setRefresh] = useState(0)
    const [currencyType, setCurrencyType] = useState("")

    // callbacks
    useEffect(() => {
        let currency = getCurrency();
        setCurrencyType(currency)
        getWishlist({
            currencyType: currency
        })
    }, [refresh])

    useEffect(() => {
        if (wishlistRemoveState.apiState === 'success') {
            message.success(wishlistRemoveState.message);
            setRefresh(refresh + 1)
        }
    }, [wishlistRemoveState])


    // functions
    const handleRemove = (wishlist_id) => {
        wishlistRemove({
            wishlist_id: wishlist_id
        })
    }
    // delete and test 
    useEffect(() => {
         console.log("hello", getWishlistState)
    }, [getWishlistState])
    return (
        <>
            <GlobleBox>
                <Wrapper>
                    <Row gutter='12' >
                        <Col  xs={24} sm={24} md={6} lg={6} xl={6} style={{ padding: 16 }} >
                            <ProfileMenu />
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{ display: 'flex', justifyContent: 'center' }} >
                            <Container>
                                <div style={{ textAlign: "center", paddingTop: 16 }} >
                                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >My Wishlist ({getWishlistState.total_records})</h1>
                                </div>
                                {getWishlistState.total_records > 0 &&
                                    <div>
                                        <ProductsWrapper className="wishid">
                                            {getWishlistState?.list.map((obj, idx) => (
                                                <ProductsBox  key={idx}>
                                                    <Product link="/product" forWishlist={true} isWishlist={true} product={obj} currencyType={currencyType}  />
                                                    <div style={{ width: "100%" }} >
                                                        <CartBtn type="primary" onClick={() => handleRemove(obj.wishlist_id)} >Remove</CartBtn>
                                                    </div>
                                                </ProductsBox>

                                            ))}
                                        </ProductsWrapper>
                                    </div>
                                }
                                {getWishlistState.total_records == 0 &&
                                    <div style={{
                                        display: "table",
                                        width: "100%",
                                        height: "50vh",
                                        textAlign: "center",
                                    }}>
                                        <div style={{
                                            display: "table-cell",
                                            verticalAlign: "middle",
                                        }}>
                                            <HeartOutlined style={{ fontSize: 25 }} />
                                            <br />
                                            <h1 style={{
                                                fontSize: "25px",
                                                display: "inline-block",
                                            }}>No data found.</h1>
                                        </div>
                                    </div>
                                }
                            </Container>
                        </Col>
                    </Row>
                </Wrapper>
            </GlobleBox>
           
        </>
    )
}

const mapStateToProps = (state) => ({
    getWishlistState: state.getWishlist,
    wishlistRemoveState: state.wishlistRemove,
})
const mapDispatchToProps = (dispatch) => ({
    getWishlist: (params) => dispatch(getWishlist(params)),
    wishlistRemove: (params) => dispatch(wishlistRemove(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
