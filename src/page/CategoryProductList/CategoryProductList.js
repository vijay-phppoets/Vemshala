import React from "react"

import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import { SubCatsWrapper, SubCatsBox } from "./CategoryProductListStyle"
import SubCategory from "../../component/SubCategory/SubCategory"
import ProductList from "../../component/ProductList/ProductList"
import Footer from "../../component/Footer/Footer"


const CategoryProductList = props => {

    return (
        <>
            <div style={{ maxHeight: 400, width: "100%", overflow: "hidden" }} >
                <img src="./slider.webp" style={{ width: "100%", height: "auto", }} />
            </div>
            <GlobleBox>
                <Wrapper>
                    <div style={{ textAlign: "center", margin: "16px 0" }} >
                        <h1 style={{ fontSize: 32, fontWeight: "bold" }} >WOMEN</h1>
                    </div>


                    <SubCatsWrapper>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 1" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 2" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 3" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 4" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 5" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 6" />
                        </SubCatsBox>
                        <SubCatsBox to="/sub-category">
                            <SubCategory SubCategory="Sub Category 7" />
                        </SubCatsBox>
                    </SubCatsWrapper>


                    <div style={{ textAlign: "center", margin: "16px 0" }} >
                        <h1 style={{ fontSize: 32, fontWeight: "bold" }} >PRODUCTS</h1>
                    </div>

                    <ProductList />
                </Wrapper>
            </GlobleBox>

           
        </>
    )
}

export default CategoryProductList