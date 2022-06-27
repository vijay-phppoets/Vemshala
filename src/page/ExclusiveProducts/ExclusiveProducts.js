import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { Spin } from "antd";
import { Helmet } from 'react-helmet';

/* CUSTOM COMPONENTS */
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import Footer from "../../component/Footer/Footer"
import {
    NewArrivalsWrapper, NewArrivalsBox} from "./ExclusiveProductsStyle"
import Product from "../../component/Product/Product"
/* ACTIONS */
import { getExclusiveProducts } from "../../action/getExclusiveProductsAction"

/* OTHERS */
import { getCurrency } from "../../utils"

const ExclusiveProducts = props => {
    
    const [currencyType, setCurrencyType] = useState("")

    const {
        getExclusiveProducts,  getExclusiveProductsState
    } = props

    /* CALLBACKS */

    useEffect(() => {
        
        let currency = getCurrency();
        setCurrencyType(currency)
        getExclusiveProducts({ currencyType: currency})

    }, [])

    return (
        <>  
            <Helmet>
                <title>Exclusive Products</title>
                <meta name="og:title" property="og:title" content="Exclusive Products" />
            </Helmet>

            {getExclusiveProducts.apiState === "loading" &&
                <div style={{ minHeight: 500, display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Spin size="large" />
                </div>
            }
            {getExclusiveProductsState.apiState === "success" &&
                <>
                    <GlobleBox>
                        <Wrapper>
                            <div style={{ textAlign: "center", margin: "16px 0" }} >
                                <h1 style={{ fontSize: 32, fontWeight: "bold", textTransform: "uppercase" }} >Exclusive Products</h1>
                            </div>

                            
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexFlow:"wrap" }} >
                                    {getExclusiveProductsState.products.map((prd) => (
                                                <NewArrivalsBox>
                                                    <Product link="/product" product={prd} currencyType={currencyType} />
                                                </NewArrivalsBox>
                                            
                                 
                                        ))}
                                    </div>
                        </Wrapper>
                    </GlobleBox>
                </>
            }

           
        </>
    )
}

const mapStateToProps = (state) => ({
    getExclusiveProductsState: state.getExclusiveProducts,
})
const mapDispatchToProps = (dispatch) => ({
    getExclusiveProducts: (params) => dispatch(getExclusiveProducts(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveProducts)