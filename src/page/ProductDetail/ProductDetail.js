import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Divider, Dropdown, Menu, message, Modal, Radio, Row, Select, Space, Spin } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import "../Script.js";
import Mount from '../../modules/Mount'


/* CUSTOM COMPONENTS */
import Product from "../../component/Product/Product";
import { GlobleBox, Wrapper } from "../../component/Xcomponent";
import {
  CartButton,
  ColorBox,
  DesktopImgContainer,
  Label,
  Left,
  MobileImgContainer,
  Price,
  ProductCollapse,
  ProductPanel,
  RegulerPrice,
  RelatedProductBox,
  RelatedProductWrapper,
  Right,
  ShortDescription,
  SwatchBtn,
  WishlistButton,
} from "./ProductDetailStyle";

/* ACTIONS */
import { getCart } from "../../action/getCartAction";
import { getCartCount } from "../../action/getCartCountAction";
import {
  getProductDetail,
  getProductDetailReset,
} from "../../action/getProductDetailAction";
import { saveWishlistDetail } from "../../action/saveWishlistAction";
import { updateCart, updateCartReset } from "../../action/updateCartAction";

/* OTHERS */
import cnf from "../../config";
import {
  getCartId,
  getCurrency,
  getCustomer,
  getToken,
  inr,
} from "../../utils";

import AccountDrawer from "../../component/AccountDrawer/AccountDrawer";

const ProductDetail = (props) => {
  /* VARIABLES */
  const url_key = props.match.params.url_key;
  const {
    getProductDetail,
    getProductDetailReset,
    getProductDetailState,
    updateCart,
    updateCartReset,
    updateCartState,
    getCartCount,
    getCart,
    saveWishlistDetail,
    saveWishlistState,
    generalState,
  } = props;
  const [imgArr, setImgArr] = useState([]);
  const [selectedAttr, setSelectedAttr] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prodNotAvailabel, setProdNotAvailabel] = useState(false);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [accountVisible, setAccountVisible] = useState(false);

  // modal states

  const [isPico, setPico] = useState(false);
  const [isBlouse, setBlouse] = useState(false);
  const [isImageChart, setImageChart] = useState(false);
  const radioStateHandler = ({ name, value }) => {
    // console.log(e.target.name)
    console.log({ name, value });
  };

  /* CALLBACKS */
  useEffect(() => {
    return () => {
      getProductDetailReset();
    };
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", toggleStickyActionBar, false);
    };
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", toggleStickyActionBar, false);
    let currency = getCurrency();
    getProductDetail({
      currencyType: currency,
      url_key: url_key,
      customer_id: getCustomer()?.id,
    });
  }, []);

  useEffect(() => {
    if (getProductDetailState.apiState === "success") {
      setImgArr(getProductDetailState.images.basic_images);

      let arr = [];
      getProductDetailState.attributes.map((obj) => {
        arr.push({ attr_id: obj.id, attr_op_id: null });
      });
      setSelectedAttr(arr);
    }
  }, [getProductDetailState]);

  useEffect(() => {
    let changeProdData = true;
    selectedAttr.map((obj) => {
      if (!obj.attr_op_id) {
        changeProdData = false;
      }
    });
    if (selectedAttr.length > 0 && changeProdData) {
      let selectedOptions = [];
      selectedAttr.map((obj) => {
        selectedOptions.push(obj.attr_op_id);
      });

      let prodFound = false;
      for (var i = 0; i < getProductDetailState.variants.length; i++) {
        var vp = getProductDetailState.variants[i];
        let toBeCheckedOptions = [];
        vp.attr_data &&
          vp.attr_data.map((obj) => {
            toBeCheckedOptions.push(obj.attribute_option_id);
          });
        if (
          selectedOptions.every((elem) => toBeCheckedOptions.includes(elem))
        ) {
          setSelectedProduct(vp);
          prodFound = true;
          break;
        }
      }
      if (!prodFound) {
        setSelectedProduct(null);
        setProdNotAvailabel(true);
      } else setProdNotAvailabel(false);
    }
  }, [selectedAttr]);

  useEffect(() => {
    if (
      getProductDetailState.product.type === "simple" &&
      getProductDetailState.product.stock === 0
    )
      setIsOutOfStock(true);
    else if (selectedProduct) {
      if (
        getProductDetailState.product.type === "variant" &&
        selectedProduct.stock === 0
      )
        setIsOutOfStock(true);
      else setIsOutOfStock(false);
    } else setIsOutOfStock(false);
  }, [getProductDetailState, selectedProduct]);

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
    if (saveWishlistState.apiState === "success") {
      message.success(saveWishlistState.message);
    }
    if (saveWishlistState.apiState === "error") {
      message.error(saveWishlistState.message);
    }
  }, [saveWishlistState]);

  /* FUNCTION */
  const toggleStickyActionBar = () => {
    var element = document.querySelector("#descriptionBox");
    var position = element && element.getBoundingClientRect();
    var el = document.querySelector(".sticky-action-bar");

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
  };

  const navigateToImage = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const changeImgs = (attr_id, attr_op_id) => {
    if (
      getProductDetailState.product.attribute_for_separate_images === attr_id
    ) {
      setImgArr(
        _.find(getProductDetailState.images.attribute_wise_images, {
          attribute_option_id: attr_op_id,
        }).images
      );
      document.documentElement.scrollTop = 0;
    }
  };

  const handleAttrOpSelect = (attr_id, attr_op_id) => {
    let arr = selectedAttr;
    arr = arr.filter((el) => el.attr_id !== attr_id);
    arr.push({ attr_id: attr_id, attr_op_id: attr_op_id });
    setSelectedAttr(arr);
  };

  const handleAddToCart = (product_id, qty) => {
    updateCart({
      product_id: product_id,
      qty: qty,
      cart_id: getCartId(),
    });
  };

  const handleWishlistAdd = (productId) => {
    if (getProductDetailState.is_wishlisted) {
      message.warning("The product already wishlisted");
    } else {
      if (!getToken()) {
        setAccountVisible(true);
        return;
      }
      saveWishlistDetail({
        product_id: productId,
      });
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBlouseModal, setIsBlouseModal] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

   window.addEventListener('scroll',() => {

      const stickyHead = document.querySelector('.sticky-head');
      const targetButton = document.querySelector('.target-button');
      const productImage  = document.querySelectorAll('.product-image ');

      if(targetButton === null || stickyHead === null || productImage === null){  return 0;  }

      if((window.scrollY ) >= targetButton.offsetTop) { stickyHead.style.visibility = 'visible' }

      else { stickyHead.style.visibility = 'hidden' }

      // console.clear();
      // console.log('sticky head container',stickyHead.scrollTop)
      // console.log('window scroll Y',window.scrollY)
      // console.log('target button scrool top',targetButton.scrollTop)
      // console.log('targetButton offsetTop',targetButton.offsetTop)
      // console.log('targetButton scrollY',targetButton.scrollY)
      // console.log(document.body.scrollTop)
      // console.log(window.pageXOffset)
      // console.log(productImage[productImage.length- 1].scrollTop)
      // console.log(scrollTop)

   })

  // @coder-kabir -------------------------------------------------------

      const [picoCondtion, updatePicoCondition] = useState('No');
      const [blouseCondition,updateBlouseCondition]  = useState('No');
      const [sizeCondition,updateSizeCondition] = useState('S');

      const [salesPriceAvailable,updateSalesPriceAvailability] = useState(false);
      const [salesPrice,updateSalesPrice]     = useState(0);
      const [productPrice,updateProductPrice] = useState(0);

      
      useEffect(() => { 

        if(getProductDetailState.product === undefined) return null

        if(getProductDetailState.product.is_sale_price === "yes"){

            updateSalesPriceAvailability(true) /* show sales price */

            updateSalesPrice(getProductDetailState.product.sale_price)
        }

        updateProductPrice(getProductDetailState.product.price)
        
        return () => null
    
      },[getProductDetailState.apiState])


      const picoHandler = (value) => {

          if(value === 'Yes') { 

              if(salesPriceAvailable === true) { updateSalesPrice(salesPrice + 250); }
          
              else {  updateProductPrice(productPrice + 250); }
          }

          else { 
          
              if(salesPriceAvailable === true) { updateSalesPrice(salesPrice - 250); }
          
              else {  updateProductPrice(productPrice - 250); }
          }

        updatePicoCondition(value) /* toggle price visibility */ 
      }

  // --------------------------------------------------------------------
  


return (
  <React.Fragment>
    <GlobleBox id="wrap">
        <Helmet>
            <title>{getProductDetailState.product.name}</title>
            <meta name="og:title" property="og:title" content={getProductDetailState.product.name}/>
            <meta name="description" content={getProductDetailState.product.short_description}/>
        </Helmet>
        <Wrapper>
          <div className="sticky-head">
              <div>
                <p><b>{ selectedProduct ? selectedProduct.name : getProductDetailState.product.name }</b></p>
                    
                {(salesPriceAvailable === true) ? (
                            
                            <div className="price-sticky">
                                <Price> { getCurrency() == "USD" ? <>$</> : <>₹</>  } { inr(salesPrice) } </Price>&nbsp;&nbsp;
                                <RegulerPrice style={{ fontSize:'20px', fontWeight:'400' }}> { getCurrency() == "USD" ? <>$</> : <>₹</> } { inr(productPrice) } </RegulerPrice>
                            </div>
                          ) : (
                            <Price>
                                { getCurrency() == "USD" ? <>$</> : <>₹</>}
                                { inr(productPrice) }
                            </Price>
                          )}
              </div>


            <div className="sticky-head-btn">
          <CartButton
                            type="primary"
                            size="large"
                            icon={<ShoppingCartOutlined />}
                            style={{ marginRight: 8 ,width: '10em',height:'2.5em'}}
                            onClick={() =>
                              handleAddToCart(
                                getProductDetailState.product.id,
                                1
                              )
                            }
                            loading={updateCartState.apiState === "loading"}
                          >
                            ADD TO CART
                          </CartButton>
                          <WishlistButton
                          className="mainWidth"
                          type="default"
                          size="large"
                          icon={
                            getProductDetailState.is_wishlisted ||
                            saveWishlistState.apiState === "success" ? (
                              <HeartFilled />
                            ) : (
                              <HeartOutlined />
                            )
                          }
                          onClick={() =>
                            handleWishlistAdd(getProductDetailState.product.id)
                          }
                        >
                          {getProductDetailState.is_wishlisted ||
                          saveWishlistState.apiState === "success"
                            ? "WISHLISTED"
                            : "WISHLIST"}
                        </WishlistButton>
            
          </div>
          </div>
          {getProductDetailState.apiState === "loading" && (
            <div  style={{ minHeight: 500, display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Spin size="large" />
            </div>
          )}
          {getProductDetailState.apiState === "success" && (
            <>
              <div style={{ display: "flex", marginTop: 16, flexFlow: "wrap", background: "#fff", padding: 10,borderRadius: 4}}>
                <Left>
                  <DesktopImgContainer>
                    <div>
                      <div style={{ position: "sticky", top: 100 }}>
                        {imgArr.map((obj) => (
                          <Link onClick={() => navigateToImage(obj.id)}>
                            <div
                              style={{
                                padding: 2,
                                borderRadius: 2,
                                marginBottom: 4,
                              }}
                            >
                              <img
                                src={`${cnf.s3_base_url}${obj.image}`}
                                alt={`${cnf.s3_base_url}${obj.image}`}
                                style={{ width: "70px", height: "auto" }}
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div style={{ margin: "0 16px" }}>
                      {imgArr.map((obj) => (
                        <img
                          src={`${cnf.s3_base_url}${obj.image}`}
                          alt={`${cnf.s3_base_url}${obj.image}`}
                          id={obj.id}
                          style={{
                            width: "100%",
                            height: "auto",
                            marginBottom: 32,
                          }}
                        />
                      ))}
                    </div>
                  </DesktopImgContainer>
                  <MobileImgContainer>
                    <Carousel
                      autoPlay={true}
                      infiniteLoop={true}
                      showThumbs={false}
                    >
                      {getProductDetailState.images.basic_images.map((obj) => (
                        <div>
                          <img
                            src={`${cnf.s3_base_url}${obj.image}`}
                            alt={`${cnf.s3_base_url}${obj.image}`}
                            className="product-image"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </MobileImgContainer>
                </Left>
                <Right>
                    <div style={{ top: 90 }}>
                        <h1 style={{ margin: 0, marginTop: 2, fontSize: 22 }}>
                            { selectedProduct ? selectedProduct.name : getProductDetailState.product.name }
                        </h1>

                        <Space style={{ marginBottom: 16 }}>
                            {(salesPriceAvailable === true) ? (
                            
                                <React.Fragment>
                                    <Price> { getCurrency() == "USD" ? <>$</> : <>₹</>  } { inr(salesPrice) } </Price>
                                    <RegulerPrice> { getCurrency() == "USD" ? <>$</> : <>₹</> } { inr(productPrice) } </RegulerPrice>
                                </React.Fragment>
                              ) : (
                                <Price>
                                    { getCurrency() == "USD" ? <>$</> : <>₹</>}
                                    { inr(productPrice) }
                                </Price>
                              )}
                        </Space>
                    
                        {/* <Space style={{ marginBottom: 16 }}>
                            {( selectedProduct ? selectedProduct.is_sale_price : getProductDetailState.product.is_sale_price) === "yes" ? (
                            
                                <React.Fragment>
                                    <Price> 
                                        ₹ { selectedProduct ? inr(selectedProduct.sale_price) : inr(getProductDetailState.product.sale_price)}
                                    </Price>
                                    <RegulerPrice>
                                        ₹ {selectedProduct ? inr(selectedProduct.price) : inr(getProductDetailState.product.price)}
                                    </RegulerPrice>
                                </React.Fragment>
                              ) : (
                                <Price>
                                    { getCurrency() == "USD" ? <>$</> : <>₹</>}
                                    { inr(getProductDetailState.product.price)}
                                </Price>
                              )}
                        </Space> */}

                    <ShortDescription>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            getProductDetailState.product.short_description.replace(
                              /(?:\r\n|\r|\n)/g,
                              "<br />"
                            ),
                        }}
                      ></div>
                    </ShortDescription>

{/* @coder-kabir--------------------------------------------------------------------------- */}

<div className="size">
  { getProductDetailState.product.type === "variant" && (
      <React.Fragment>
          <div className="size-head">
              <h2>Select Size</h2>
              <a className="btn btn-group">
                  <h3 onClick={() => setIsBlouseModal(true)} style={{ marginBottom: "0",marginTop: "5px", marginLeft: "1em",color: "#ff3f6c",}}>Size chart</h3>
              </a>
          </div>
          <div className="size-btn"><div className="main-btn">
              <Radio.Group onChange={(event) => console.log(event.target)} value={'S'}>
                  <Radio value={'S'}>S</Radio>
                  <Radio value={'M'}>M</Radio>
                  <Radio value={'L'}>L</Radio>
                  <Radio value={'XL'}>XL</Radio>
              </Radio.Group>
          </div></div>
                          
                          <div className="color">
                            <h2>Select Color</h2>
                            <div className="select-color">
                              <a className="btn btn-group">
                                <div className="black m-color"></div>
                              </a>
                              <a className="btn btn-group">
                                <div className="red m-color"></div>
                              </a>
                              <a className="btn btn-group">
                                <div className="blue m-color"></div>
                              </a>
                              <a className="btn btn-group">
                                <div className="green m-color"></div>
                              </a>
                              <a className="btn btn-group">
                                <div className="orange m-color"></div>
                              </a>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                    <div className="hello" style={{ margin: "1em 0em" }}>

{/* @coder-kabir -------------------------------------------------------------------------------------------------- */}

  { getProductDetailState.product.type === "simple" && <Button type="primary" onClick={showModal}>Product Description</Button>  }

  <Modal title="Product Description" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div className="blouse"><div className="blouse_chart">
  
          <div className="full">
              <div style={{ width : "30%" }}><h4><b>Saree Pico : </b></h4></div>
              <div style={{ width : "30%" }}>
                  <Radio.Group onChange={(e) => { picoHandler(e.target.value) }} value={picoCondtion}>
                      <Space direction="horizontal">
                          <Radio value={'Yes'}>Yes</Radio>
                          <Radio value={'No'}>NO</Radio>
                      </Space>
                  </Radio.Group>
              </div>
              <div style={{ width : "40%" }}> 
                { picoCondtion === 'Yes' && 
                  <React.Fragment>
                      { getCurrency() == "USD" ? <>$</> : <>₹</>} {salesPriceAvailable === true ? salesPrice : productPrice} 
                  </React.Fragment>
                }
              </div>
          </div>

          <div className="full" style={{ marginTop:'20px' }}>
              <div style={{ width : "30%" }}><h4><b>Blouse Stitching : </b></h4></div>
              <div style={{ width : "30%" }}>
                  <Radio.Group onChange={(e) => { updateBlouseCondition(e.target.value) }} value={blouseCondition}>
                      <Space direction="horizontal">
                          <Radio value={'Yes'}>Yes</Radio>
                          <Radio value={'No'}>NO</Radio>
                      </Space>
                  </Radio.Group>
              </div>
              <div style={{ width : "40%" }}>
                { blouseCondition === 'Yes' &&
                
                  <Select defaultValue="Select Design" style={{  width: '100%', borderRadius:'10px !important' }} onChange={(...data) => { console.log(data) }}>
                      <option value="volvo">Line Blouse</option>
                      <option value="saab">Round Neck</option>
                      <option value="opel">Without Blouse</option>
                      <option value="audi">V Neck</option>
                  </Select>
                }
              </div>
          </div>

          <div className="full" style={{ marginTop:'20px' }}>
              { blouseCondition === 'Yes' && 
                  <React.Fragment>
                      <div style={{ width : "30%" }}><h4><b>Blouse Size : </b></h4></div>
                      <div style={{ width : "50%" }}>
                          <Radio.Group onChange={(e) => { updateSizeCondition(e.target.value) }} value={sizeCondition}>
                              <Space direction="horizontal">
                                  <Radio value={'S'}>S</Radio>
                                  <Radio value={'M'}>M</Radio>
                                  <Radio value={'L'}>L</Radio>
                                  <Radio value={'XL'}>XL</Radio>
                              </Space>
                          </Radio.Group>
                      </div>
                  </React.Fragment>
              }
          </div>

          <div className="full">
              <div className="half_main"><div className="main-size">
                  <div className="size-head">
                      <h2>Show Size</h2>
                      <a className="btn btn-group">
                          <h3 onClick={() => setImageChart(!isImageChart) } style={{ marginBottom: "0", marginTop: "5px", marginLeft: "1em", color: "#ff3f6c",}}>
                            Show size chart
                          </h3>
                      </a>
                  </div>
              </div></div>
          </div>
          <div className="full"><div style={{ width:"100%" }}>
              { isImageChart === true && (
                    <div className="inner-img" style={{ textAlign:'center' }}>
                          <img style={{ width: "240px",height: '260px' }} src="https://vemshala-gallery.s3.ap-south-1.amazonaws.com/DSC_5099_1024x1024%402x.webp"/>
                    </div>
              )}
          </div></div>
                          
      </div></div>                  
  </Modal>

{/* code done :) -------------------------------------------------------------------------------------------------- */}




                      <Modal
                        title="Size Chart"
                        visible={isBlouseModal}
                        onOk={() => setIsBlouseModal(false)}
                        onCancel={() => setIsBlouseModal(false)}
                      >
                        <div className="chart_img">
                          <img
                            src="https://vemshala-gallery.s3.ap-south-1.amazonaws.com/DSC_5099_1024x1024%402x.webp"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </Modal>
                    </div>
                    <div className="miles">
                      <div className="points">
                        <h3>
                          Get <span>200</span> Points
                        </h3>
                      </div>
                    </div>

                    {getProductDetailState.product.type === "variant" && (
                      <>
                        {getProductDetailState.attributes.map((obj) => (
                          <>
                            <p style={{ margin: 0 }}>{obj.name}:</p>
                            {obj.type === "text_swatch" && (
                              <Space style={{ marginBottom: 16 }}>
                                {obj.options.map((option) => (
                                  <SwatchBtn
                                    onClick={() => {
                                      changeImgs(obj.id, option.id);
                                      handleAttrOpSelect(obj.id, option.id);
                                    }}
                                    active={
                                      _.findIndex(selectedAttr, {
                                        attr_op_id: option.id,
                                      }) > -1
                                        ? true
                                        : false
                                    }
                                  >
                                    {option.option_value}
                                  </SwatchBtn>
                                ))}
                              </Space>
                            )}
                            {obj.type === "color_swatch" && (
                              <Space style={{ marginBottom: 16 }}>
                                {obj.options.map((option) => (
                                  <ColorBox
                                    onClick={() => {
                                      changeImgs(obj.id, option.id);
                                      handleAttrOpSelect(obj.id, option.id);
                                    }}
                                    active={
                                      _.findIndex(selectedAttr, {
                                        attr_op_id: option.id,
                                      }) > -1
                                        ? true
                                        : false
                                    }
                                  >
                                    <div
                                      style={{
                                        height: 28,
                                        width: 28,
                                        background: option.color_code,
                                        borderRadius: 16,
                                        border: "solid 1px #a0a0a0",
                                      }}
                                    />
                                  </ColorBox>
                                ))}
                              </Space>
                            )}
                          </>
                        ))}
                      </>
                    )}

                    {prodNotAvailabel && (
                      <div
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        No product available with selected options.
                      </div>
                    )}

                    {!prodNotAvailabel && (
                      <div className="add_cart ">
                        {isOutOfStock ? (
                          <CartButton
                            type="primary"
                            size="large"
                            icon={<ShoppingCartOutlined />}
                            style={{ marginRight: 8 }}
                            disabled
                          >
                            OUT OF STOCK
                          </CartButton>
                        ) : (
                          <CartButton
                            type="primary"
                            size="large"
                            icon={<ShoppingCartOutlined />}
                            style={{ marginRight: 8 }}
                            onClick={() => handleAddToCart( getProductDetailState.product.id,1)}
                            className="target-button"
                            loading={updateCartState.apiState === "loading"}
                          >
                            ADD TO CART
                          </CartButton>
                        )}

                        <WishlistButton
                          className="mainWidth"
                          type="default"
                          size="large"
                          icon={
                            getProductDetailState.is_wishlisted ||
                            saveWishlistState.apiState === "success" ? (
                              <HeartFilled />
                            ) : (
                              <HeartOutlined />
                            )
                          }
                          onClick={() =>
                            handleWishlistAdd(getProductDetailState.product.id)
                          }
                        >
                          {getProductDetailState.is_wishlisted ||
                          saveWishlistState.apiState === "success"
                            ? "WISHLISTED"
                            : "WISHLIST"}
                        </WishlistButton>
                      </div>
                    )}

                    <Divider />
                    <Space direction="vertical">
                      <div>
                        <Label>SKU:</Label>
                        <span>{getProductDetailState.product.sku}</span>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Label>Category:</Label>
                        <Space>
                          {getProductDetailState.categories.map((obj) => (
                            <a href={`/shop/${obj.url_key}`}>
                              <span>{obj.name}</span>
                            </a>
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
                    <FacebookShareButton
                      url={window.location.href}
                      style={{ padding: "2px" }}
                    >
                      {" "}
                      <FacebookIcon size={22} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={window.location.href}
                      style={{ padding: "2px" }}
                    >
                      <TwitterIcon size={22} />
                    </TwitterShareButton>
                  </div>
                </Right>
              </div>

              <div
                id="descriptionBox"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 10px",
                }}
              >
                <div style={{ margin: "24px 0", maxWidth: "90%", flex: 1 }}>
                  <ProductCollapse accordion defaultActiveKey={["0"]}>
                    {getProductDetailState.description_list.map(
                      (obj, index) => (
                        <ProductPanel header={obj.title} key={index}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeURIComponent(obj.content),
                            }}
                          ></div>
                        </ProductPanel>
                      )
                    )}
                  </ProductCollapse>
                </div>
              </div>

              {getProductDetailState.relatedProds.length > 0 && (
                <div style={{ padding: 10 }}>
                  <h1 style={{ margin: 0, marginTop: 32, marginBottom: 8 }}>
                    Related products
                  </h1>
                  <RelatedProductWrapper>
                    {getProductDetailState.relatedProds.map((prod) => (
                      <RelatedProductBox className="desktop">
                        <Product product={prod} currencyType={getCurrency()} />
                      </RelatedProductBox>
                    ))}
                  </RelatedProductWrapper>
                </div>
              )}

              <div className="sticky-action-bar" style={{ display: "none" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ maxWidth: 50 }}>
                    <img
                      src="./category.webp"
                      style={{ width: "100%", height: "50px" }}
                    />
                  </div>
                  <h3 style={{ marginLeft: 12 }}>Cotton Patch Pocket Short</h3>
                </div>
                <div>
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </>
          )}
        </Wrapper>
      </GlobleBox>

      <AccountDrawer
        accountVisible={accountVisible}
        onClose={() => setAccountVisible(false)}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  getProductDetailState: state.getProductDetail,
  updateCartState: state.updateCart,
  saveWishlistState: state.saveWishlist,
  generalState: state.general,
});
const mapDispatchToProps = (dispatch) => ({
  getProductDetail: (params) => dispatch(getProductDetail(params)),
  getProductDetailReset: () => dispatch(getProductDetailReset()),
  updateCart: (params) => dispatch(updateCart(params)),
  updateCartReset: () => dispatch(updateCartReset()),
  getCartCount: (params) => dispatch(getCartCount(params)),
  getCart: (params) => dispatch(getCart(params)),
  saveWishlistDetail: (params) => dispatch(saveWishlistDetail(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
