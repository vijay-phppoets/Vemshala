import {
    HeartFilled,
    HeartOutlined, ShoppingCartOutlined
} from "@ant-design/icons";
import { Button, Divider, message, Space, Spin } from "antd";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";

/* CUSTOM COMPONENTS */
import Product from "../../component/Product/Product";
import { GlobleBox, Wrapper } from "../../component/Xcomponent";
import { CartButton, ColorBox, DesktopImgContainer, Label, Left, MobileImgContainer, Price, ProductCollapse, ProductPanel, RegulerPrice, RelatedProductBox, RelatedProductWrapper, Right, ShortDescription, SwatchBtn, WishlistButton } from "./ProductDetailStyle";

/* ACTIONS */
import { getCart } from "../../action/getCartAction";
import { getCartCount } from "../../action/getCartCountAction";
import { getProductDetail, getProductDetailReset } from "../../action/getProductDetailAction";
import { saveWishlistDetail } from "../../action/saveWishlistAction";
import { updateCart, updateCartReset } from "../../action/updateCartAction";

/* OTHERS */
import cnf from "../../config";
import { getCartId, getCurrency, getCustomer, getToken, inr } from "../../utils";

import AccountDrawer from "../../component/AccountDrawer/AccountDrawer";

const ProductDetail = props => {
    /* VARIABLES */
    const url_key = props.match.params.url_key
    const {
        getProductDetail, getProductDetailReset, getProductDetailState,
        updateCart, updateCartReset, updateCartState,
        getCartCount,
        getCart,
        saveWishlistDetail, saveWishlistState,
        generalState,
    } = props
    const [imgArr, setImgArr] = useState([])
    const [selectedAttr, setSelectedAttr] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [prodNotAvailabel, setProdNotAvailabel] = useState(false)
    const [isOutOfStock, setIsOutOfStock] = useState(false)
    const [accountVisible, setAccountVisible] = useState(false)


    /* CALLBACKS */
    useEffect(() => {
        return (() => {
            getProductDetailReset()
        })
    }, [])

    useEffect(() => {
        return (() => {
            window.removeEventListener('scroll', toggleStickyActionBar, false);
        })
    }, [])

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        window.addEventListener('scroll', toggleStickyActionBar, false);
        let currency = getCurrency();
        getProductDetail({
            currencyType: currency,
            url_key: url_key,
            customer_id: getCustomer()?.id,
        })
    }, [])

    useEffect(() => {
        if (getProductDetailState.apiState === "success") {
            setImgArr(getProductDetailState.images.basic_images)

            let arr = []
            getProductDetailState.attributes.map(obj => {
                arr.push({ attr_id: obj.id, attr_op_id: null })
            })
            setSelectedAttr(arr)
        }
    }, [getProductDetailState])

    useEffect(() => {
        let changeProdData = true
        selectedAttr.map(obj => {
            if (!obj.attr_op_id) {
                changeProdData = false
            }
        })
        if (selectedAttr.length > 0 && changeProdData) {
            let selectedOptions = []
            selectedAttr.map(obj => {
                selectedOptions.push(obj.attr_op_id)
            })


            let prodFound = false
            for (var i = 0; i < getProductDetailState.variants.length; i++) {
                var vp = getProductDetailState.variants[i]
                let toBeCheckedOptions = []
                vp.attr_data && vp.attr_data.map(obj => {
                    toBeCheckedOptions.push(obj.attribute_option_id)
                })
                if (selectedOptions.every(elem => toBeCheckedOptions.includes(elem))) {
                    setSelectedProduct(vp)
                    prodFound = true
                    break
                }
            }
            if (!prodFound) {
                setSelectedProduct(null)
                setProdNotAvailabel(true)
            } else setProdNotAvailabel(false)
        }
    }, [selectedAttr])

    useEffect(() => {
        if (getProductDetailState.product.type === "simple" && getProductDetailState.product.stock === 0) setIsOutOfStock(true)
        else if (selectedProduct) {
            if (getProductDetailState.product.type === "variant" && selectedProduct.stock === 0) setIsOutOfStock(true)
            else setIsOutOfStock(false)
        } else setIsOutOfStock(false)

    }, [getProductDetailState, selectedProduct])

    // useEffect(() => {
    //     if (updateCartState.apiState === "error") {
    //         message.error(updateCartState.message);
    //     }
    //     if (updateCartState.apiState === "success") {
    //         setCartId(updateCartState.cart_id)
    //         getCartCount({
    //             cart_id: updateCartState.cart_id
    //         })
    //         getCart({
    //             cart_id: updateCartState.cart_id,
    //             currencyType: getCurrency()
    //         })
    //         message.success(updateCartState.message);
    //     }
    // }, [updateCartState])

    useEffect(() => {
        if (saveWishlistState.apiState === 'success') {
            message.success(saveWishlistState.message);
        }
        if (saveWishlistState.apiState === 'error') {
            message.error(saveWishlistState.message);
        }
    }, [saveWishlistState])


    /* FUNCTION */
    const toggleStickyActionBar = () => {
        var element = document.querySelector('#descriptionBox');
        var position = element && element.getBoundingClientRect();
        var el = document.querySelector('.sticky-action-bar');

        if (position) {
            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0) {
                // show sticky action bar
                el.classList.remove("sticky-action-bar-hide");
                el.classList.add("sticky-action-bar-show");
            } else {
                // hide sticky action bar
                el.classList.remove("sticky-action-bar-show");
                el.classList.add("sticky-action-bar-hide");
            }
        }
    }

    const navigateToImage = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    const changeImgs = (attr_id, attr_op_id) => {
        if (getProductDetailState.product.attribute_for_separate_images === attr_id) {
            setImgArr(_.find(getProductDetailState.images.attribute_wise_images, { 'attribute_option_id': attr_op_id }).images)
            document.documentElement.scrollTop = 0;
        }
    }

    const handleAttrOpSelect = (attr_id, attr_op_id) => {
        let arr = selectedAttr
        arr = arr.filter(el => el.attr_id !== attr_id);
        arr.push({ attr_id: attr_id, attr_op_id: attr_op_id })
        setSelectedAttr(arr)
    }

    const handleAddToCart = (product_id, qty) => {
        updateCart({
            product_id: product_id,
            qty: qty,
            cart_id: getCartId()
        })
    }

    const handleWishlistAdd = (productId) => {
        if (getProductDetailState.is_wishlisted) {
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
        <>
            <GlobleBox>
                <Helmet>
                    <title>{getProductDetailState.product.name}</title>
                    <meta name="og:title" property="og:title" content={getProductDetailState.product.name} />
                    <meta name="description" content={getProductDetailState.product.short_description} /> 
                </Helmet>
                <Wrapper>
                    {getProductDetailState.apiState === "loading" &&
                        <div style={{ minHeight: 500, display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <Spin size="large" />
                        </div>
                    }
                    {getProductDetailState.apiState === "success" &&
                        <>
                            <div style={{ display: "flex", marginTop: 16, flexFlow: "wrap", background: "#fff", padding: 10, borderRadius: 4 }} >
                                <Left>
                                    <DesktopImgContainer>
                                        <div>
                                            <div style={{ position: "sticky", top: 100, }} >
                                                {imgArr.map(obj => (
                                                    <Link onClick={() => navigateToImage(obj.id)} >
                                                        <div style={{ padding: 2, borderRadius: 2, marginBottom: 4 }} >
                                                            <img src={`${cnf.s3_base_url}${obj.image}`}
                                                                alt={`${cnf.s3_base_url}${obj.image}`}
                                                                style={{ width: "70px", height: "auto" }} />
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div style={{ margin: "0 16px" }} >
                                            {imgArr.map(obj => (
                                                <img src={`${cnf.s3_base_url}${obj.image}`}
                                                    alt={`${cnf.s3_base_url}${obj.image}`}
                                                    id={obj.id}
                                                    style={{ width: "100%", height: "auto", marginBottom: 32 }} />
                                            ))}
                                        </div>
                                    </DesktopImgContainer>
                                    <MobileImgContainer>
                                        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                                            {getProductDetailState.images.basic_images.map(obj => (
                                                <div>
                                                    <img
                                                        src={`${cnf.s3_base_url}${obj.image}`}
                                                        alt={`${cnf.s3_base_url}${obj.image}`}
                                                    />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </MobileImgContainer>
                                </Left>
                                <Right>
                                    <div style={{ position: "sticky", top: 90, }} >
                                        <h1 style={{ margin: 0, marginTop: 2, fontSize: 22 }} >
                                            {selectedProduct ? selectedProduct.name : getProductDetailState.product.name}
                                        </h1>
                                        <Space style={{ marginBottom: 16 }} >
                                            {(selectedProduct ? selectedProduct.is_sale_price : getProductDetailState.product.is_sale_price) === "yes"
                                                ? <>
                                                    <Price>₹{
                                                        selectedProduct
                                                            ? inr(selectedProduct.sale_price)
                                                            : inr(getProductDetailState.product.sale_price)
                                                    }</Price>
                                                    <RegulerPrice>₹{
                                                        selectedProduct
                                                            ? inr(selectedProduct.price)
                                                            : inr(getProductDetailState.product.price)
                                                    }</RegulerPrice>
                                                </>
                                                : <Price>
                                                    {getCurrency() == "USD" ? <>$</> : <>₹</>}
                                                    {inr(getProductDetailState.product.price)}</Price>}
                                        </Space>
                                        <h1>hell</h1>
                                        <ShortDescription>
                                            <div dangerouslySetInnerHTML={{ __html: getProductDetailState.product.short_description.replace(/(?:\r\n|\r|\n)/g, '<br />') }}></div>
                                        </ShortDescription>

                                        {getProductDetailState.product.type === "variant" &&
                                            <>
                                                {getProductDetailState.attributes.map(obj => (
                                                    <>
                                                        <p style={{ margin: 0 }} >{obj.name}:</p>
                                                        {obj.type === "text_swatch" &&
                                                            <Space style={{ marginBottom: 16 }} >
                                                                {obj.options.map(option => (
                                                                    <SwatchBtn
                                                                        onClick={() => {
                                                                            changeImgs(obj.id, option.id)
                                                                            handleAttrOpSelect(obj.id, option.id)
                                                                        }}
                                                                        active={_.findIndex(selectedAttr, { 'attr_op_id': option.id }) > -1 ? true : false}
                                                                    >{option.option_value}</SwatchBtn>
                                                                ))}
                                                            </Space>
                                                        }
                                                        {obj.type === "color_swatch" &&
                                                            <Space style={{ marginBottom: 16 }} >
                                                                {obj.options.map(option => (
                                                                    <ColorBox
                                                                        onClick={() => {
                                                                            changeImgs(obj.id, option.id)
                                                                            handleAttrOpSelect(obj.id, option.id)
                                                                        }}
                                                                        active={_.findIndex(selectedAttr, { 'attr_op_id': option.id }) > -1 ? true : false}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                height: 28, width: 28, background: option.color_code, borderRadius: 16,
                                                                                border: "solid 1px #a0a0a0",
                                                                            }}
                                                                        />
                                                                    </ColorBox>
                                                                ))}
                                                            </Space>
                                                        }
                                                    </>
                                                ))}
                                            </>
                                        }

                                        {prodNotAvailabel &&
                                            <div style={{ color: "red", fontSize: 12, fontWeight: "bold" }} >
                                                No product available with selected options.
                                            </div>}



                                        {(!prodNotAvailabel) &&
                                            <div >
                                                {isOutOfStock ?
                                                    <CartButton type="primary" size="large"
                                                        icon={<ShoppingCartOutlined />} style={{ marginRight: 8 }}
                                                        disabled
                                                    >OUT OF STOCK</CartButton>
                                                    : <CartButton type="primary" size="large"
                                                        icon={<ShoppingCartOutlined />} style={{ marginRight: 8 }}
                                                        onClick={() => handleAddToCart(getProductDetailState.product.id, 1)}
                                                        loading={updateCartState.apiState === "loading"}
                                                    >ADD TO CART</CartButton>
                                                }

                                                <WishlistButton type="default" size="large" icon={(getProductDetailState.is_wishlisted || saveWishlistState.apiState === 'success')
                                                    ? <HeartFilled />
                                                    : <HeartOutlined />}
                                                    onClick={() => handleWishlistAdd(getProductDetailState.product.id)}
                                                >{(getProductDetailState.is_wishlisted || saveWishlistState.apiState === 'success')
                                                ? "WISHLISTED"
                                                : "WISHLIST"}</WishlistButton>
                                            </div>
                                        } 


                                        <Divider />
                                        <Space direction="vertical" >
                                            <div>
                                                <Label>SKU:</Label>
                                                <span>{getProductDetailState.product.sku}</span>
                                            </div>
                                            <div style={{ display: "flex" }} >
                                                <Label >Category:</Label>
                                                <Space>
                                                    {getProductDetailState.categories.map(obj => (
                                                    <a href={`/shop/${obj.url_key}`}><span>{obj.name}</span></a>
                                                    ))}
                                                </Space>
                                            </div>
                                            <div>
                                                <Label>Tags:</Label>
                                                <span>{getProductDetailState.product.tags}</span>
                                            </div>
                                            <div>
                                                <Label>Country of origin:</Label>
                                                <span>INDIA</span>
                                            </div>
                                        </Space>
                                        <Divider />
                                        <Label>Share:</Label>
                                        <FacebookShareButton url={window.location.href} style={{padding:"2px"}}>  <FacebookIcon size={22} /></FacebookShareButton>
                                        <TwitterShareButton url={window.location.href} style={{padding:"2px"}}><TwitterIcon size={22} /></TwitterShareButton>
                                       
                                    </div>
                                </Right>
                            </div>


                            <div id="descriptionBox" style={{ display: "flex", justifyContent: "center", padding: "0 10px" }} >
                                <div style={{ margin: "24px 0", maxWidth: "80%", flex: 1 }} >
                                    <ProductCollapse accordion defaultActiveKey={['0']}>
                                        {getProductDetailState.description_list.map((obj, index) => (
                                            <ProductPanel header={obj.title} key={index}>
                                                <div dangerouslySetInnerHTML={{ __html: decodeURIComponent(obj.content) }}></div>
                                            </ProductPanel>
                                        ))}
                                    </ProductCollapse>
                                </div>
                            </div>


                            {getProductDetailState.relatedProds.length>0 && 
                            <div style={{ padding: 10 }}>
                                <h1 style={{ margin: 0, marginTop: 32, marginBottom: 8 }} >Related products</h1>
                                <RelatedProductWrapper>
                                    {getProductDetailState.relatedProds.map(prod => (
                                        <RelatedProductBox>
                                            <Product product={prod} currencyType={getCurrency()} />
                                        </RelatedProductBox>
                                    ))}
                                </RelatedProductWrapper>
                            </div>
                            }
                            
                            <div className="sticky-action-bar" style={{ display: "none" }} >
                                <div style={{ display: "flex", alignItems: "center" }} >
                                    <div style={{ maxWidth: 50 }} >
                                        <img src="./category.webp" style={{ width: "100%", height: "50px" }} />
                                    </div>
                                    <h3 style={{ marginLeft: 12 }} >Cotton Patch Pocket Short</h3>
                                </div>
                                <div>
                                    <Button type="primary" icon={<ShoppingCartOutlined />} size="large">ADD TO CART</Button>
                                </div>
                            </div>
                        </>
                    }

                </Wrapper>
            </GlobleBox>
           

            <AccountDrawer
                accountVisible={accountVisible}
                onClose={() => setAccountVisible(false)}
            />

        </>

    )
}

const mapStateToProps = (state) => ({
    getProductDetailState: state.getProductDetail,
    updateCartState: state.updateCart,
    saveWishlistState: state.saveWishlist,
    generalState: state.general,
})
const mapDispatchToProps = (dispatch) => ({
    getProductDetail: (params) => dispatch(getProductDetail(params)),
    getProductDetailReset: () => dispatch(getProductDetailReset()),
    updateCart: (params) => dispatch(updateCart(params)),
    updateCartReset: () => dispatch(updateCartReset()),
    getCartCount: (params) => dispatch(getCartCount(params)),
    getCart: (params) => dispatch(getCart(params)),
    saveWishlistDetail: (params) => dispatch(saveWishlistDetail(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)